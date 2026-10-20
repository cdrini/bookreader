import { extractMockEntities } from '@/src/plugins/deep_read/DeepReadApi.js';
import { mentionToFragment } from '@/src/plugins/deep_read/plugin.deep_read.js';

describe('extractMockEntities', () => {
  const words = 'He travelled from London to Paris, where Mr Henry Smith met him. Paris was cold.'.split(' ');

  test('finds capitalized phrases, skipping lone sentence starts', () => {
    const found = extractMockEntities(words);
    expect(found.map(e => e.name)).toEqual(['London', 'Paris', 'Henry Smith']);
    expect(found.map(e => e.type)).toEqual(['place', 'place', 'person']);
  });

  test('ids are stable across mentions', () => {
    const found = extractMockEntities([...words, 'in', 'London']);
    expect(found[0].id).toBe(found[found.length - 1].id);
  });
});

describe('mentionToFragment', () => {
  const entity = { name: 'Mr. Bumble', surface_forms: ['Bumble', 'Mr.  Bumble'] };

  test('marks just the name, keeping the rest as context', () => {
    const f = mentionToFragment(entity, 'Mr.  Bumble  and  Mrs.  Corney  taking  Tea', 32);
    expect([f.prefix, f.quote, f.suffix, f.pageIndex]).toEqual([null, 'Mr.  Bumble', 'and  Mrs.  Corney  taking  Tea', 32]);
  });

  test('matches whole words only', () => {
    const f = mentionToFragment({ name: 'Ann', surface_forms: [] }, 'Annie met Ann there', 0);
    expect([f.prefix, f.quote, f.suffix]).toEqual(['Annie met', 'Ann', 'there']);
  });

  test('falls back to the whole quote', () => {
    expect(mentionToFragment(entity, 'the beadle', 0).quote).toBe('the beadle');
  });
});
