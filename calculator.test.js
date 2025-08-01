import calculator from './calculator';

describe('calculator', () => {
  it('exists', () => {
    expect(calculator).toBeDefined();
  });

  it('is object', () => {
    expect(typeof calculator).toBe('object');
  });

  it("has 'add', 'subtract', 'multiply' and 'divide' properties", () => {
    expect('add' in calculator).toBeTruthy();
    expect('subtract' in calculator).toBeTruthy();
    expect('multiply' in calculator).toBeTruthy();
    expect('divide' in calculator).toBeTruthy();
  });

  describe('.add()', () => {
    it('is function', () => {
      expect(typeof calculator.add).toBe('function');
    });

    it('accepts strictly 2 arguments', () => {
      expect(() => calculator.add()).toThrow();
      expect(() => calculator.add(1)).toThrow();
      expect(() => calculator.add(1, 2, 3)).toThrow();
      expect(() => calculator.add(1, 2)).not.toThrow();
    });

    it('adds 2 numbers together', () => {
      expect(calculator.add(1, 2)).toBe(3);
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('converts non-numeric arguments to numbers', () => {
      expect(calculator.add('1', 2)).toBe(3);
      expect(calculator.add('2', '3')).toBe(5);
      expect(calculator.add('a', 1)).toBeNaN();
    });
  });

  describe('.subtract()', () => {
    it('is function', () => {
      expect(typeof calculator.subtract).toBe('function');
    });

    it('accepts strictly 2 arguments', () => {
      expect(() => calculator.subtract()).toThrow();
      expect(() => calculator.subtract(1)).toThrow();
      expect(() => calculator.subtract(1, 2, 3)).toThrow();
      expect(() => calculator.subtract(1, 2)).not.toThrow();
    });

    it('subtracts second number from the first', () => {
      expect(calculator.subtract(1, 2)).toBe(-1);
      expect(calculator.subtract(10, 2)).toBe(8);
    });

    it('converts non-numeric arguments to numbers', () => {
      expect(calculator.subtract('1', 2)).toBe(-1);
      expect(calculator.subtract('10', '2')).toBe(8);
      expect(calculator.subtract('a', 1)).toBeNaN();
    });
  });

  describe('.multiply()', () => {
    it('is function', () => {
      expect(typeof calculator.multiply).toBe('function');
    });

    it('accepts strictly 2 arguments', () => {
      expect(() => calculator.multiply()).toThrow();
      expect(() => calculator.multiply(1)).toThrow();
      expect(() => calculator.multiply(1, 2, 3)).toThrow();
      expect(() => calculator.multiply(1, 2)).not.toThrow();
    });

    it('multiplies 2 numbers together', () => {
      expect(calculator.multiply(1, 2)).toBe(2);
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    it('converts non-numeric arguments to numbers', () => {
      expect(calculator.multiply('1', 2)).toBe(2);
      expect(calculator.multiply('2', '3')).toBe(6);
      expect(calculator.multiply('a', 1)).toBeNaN();
    });
  });

  describe('.divide()', () => {
    it('is function', () => {
      expect(typeof calculator.divide).toBe('function');
    });

    it('accepts strictly 2 arguments', () => {
      expect(() => calculator.divide()).toThrow();
      expect(() => calculator.divide(1)).toThrow();
      expect(() => calculator.divide(1, 2, 3)).toThrow();
      expect(() => calculator.divide(1, 2)).not.toThrow();
    });

    it('divides first number by the second', () => {
      expect(calculator.divide(1, 2)).toBe(0.5);
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it('converts non-numeric arguments to numbers', () => {
      expect(calculator.divide('1', 2)).toBe(0.5);
      expect(calculator.divide('10', '2')).toBe(5);
      expect(calculator.divide('a', 1)).toBeNaN();
    });

    it("returns 'Infinity' with a correct sign on division by zero", () => {
      expect(calculator.divide(1, 0)).toBe(Infinity);
      expect(calculator.divide(-1, 0)).toBe(-Infinity);
    });
  });
});
