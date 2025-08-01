import caesarCipher from './caesar-cipher';

describe('caesarCipher()', () => {
  it('exists', () => {
    expect(caesarCipher).toBeDefined();
  });

  it('is function', () => {
    expect(typeof caesarCipher).toBe('function');
  });

  it('only accepts string as first arg and number as second arg', () => {
    expect(() => caesarCipher(3)).toThrow();
    expect(() => caesarCipher('hello')).toThrow();
    expect(() => caesarCipher('hello', '3')).toThrow();
    expect(() => caesarCipher('hello', 3)).not.toThrow();
  });

  it("returns provided string with all alpha chars shifted 'key' times", () => {
    expect(caesarCipher('hello', 3)).toBe('khoor');
    expect(caesarCipher('hello', 2)).toBe('jgnnq');
    expect(caesarCipher('world', 2)).toBe('yqtnf');
  });

  it('properly wraps alphabet overflow to start of alphabet', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  it('preserves case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  it("doesn't change non-alpha chars", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
});
