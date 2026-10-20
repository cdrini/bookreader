import { extractMockEntities } from '@/src/plugins/deep_read/DeepReadApi.js';

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
