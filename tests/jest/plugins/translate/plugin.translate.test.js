// This dependency uses import.meta.url, which Jest does not handle in our current test setup.
// Mocking it keeps this panel test lightweight and avoids pulling in the translation runtime.
jest.mock('@internetarchive/bergamot-translator/translator.js', () => ({
  BatchTranslator: class {},
}));

import { BrTranslatePanel, TranslatePlugin } from '@/src/plugins/translate/plugin.translate.js';

describe('BrTranslatePanel unsupported language warning', () => {
  test('shows unsupported language warning message', () => {
    const panel = new BrTranslatePanel();
    panel.sourceLanguageSupported = false;
    panel.detectedFromLang = 'zzzz';

    expect(panel._statusWarning()).toBe('Translating from zzzz is not supported');
  });
});

describe('TranslatePlugin.getDefaultToLanguage', () => {
  const plugin = /** @type {any} */ ({
    translationManager: {toLanguages: [{code: 'en'}, {code: 'fr'}, {code: 'zh-Hans'}]},
  });
  const getDefault = (browserLanguages) => {
    jest.spyOn(navigator, 'languages', 'get').mockReturnValue(browserLanguages);
    return TranslatePlugin.prototype.getDefaultToLanguage.call(plugin);
  };

  afterEach(() => jest.restoreAllMocks());

  test('uses the browser language, including regional variants', () => {
    expect(getDefault(['fr'])).toBe('fr');
    expect(getDefault(['fr-CA', 'en'])).toBe('fr');
    expect(getDefault(['zh-CN'])).toBe('zh-Hans');
  });

  test('skips browser languages without a model', () => {
    expect(getDefault(['xx', 'fr'])).toBe('fr');
    expect(getDefault(['xx'])).toBe('en');
  });
});
