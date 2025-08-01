import reverseString from './reverse-string';

describe('reverseString()', () => {
  it('exists', () => {
    expect(reverseString).toBeDefined();
  });

  it('is function', () => {
    expect(typeof reverseString).toBe('function');
  });

  it('returns provided string reversed', () => {
    expect(reverseString('string')).toBe('gnirts');
    expect(reverseString('Hello')).toBe('olleH');
  });

  it('converts non-strings to strings', () => {
    expect(reverseString(true)).toBe('eurt');
    expect(reverseString(123)).toBe('321');
  });
});
