import capitalize from './capitalize';

describe('capitalize()', () => {
  it('exists', () => {
    expect(capitalize).toBeDefined();
  });

  it('is function', () => {
    expect(typeof capitalize).toBe('function');
  });

  it('returns provided string with first char capitalized', () => {
    expect(capitalize('string')).toBe('String');
    expect(capitalize('heLLo')).toBe('HeLLo');
  });

  it('converts non-strings to strings', () => {
    expect(capitalize(true)).toBe('True');
    expect(capitalize(1)).toBe('1');
  });
});
