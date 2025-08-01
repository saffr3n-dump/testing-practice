import analyzeArray from './analyze-array';

describe('analyzeArray()', () => {
  it('exists', () => {
    expect(analyzeArray).toBeDefined();
  });

  it('is function', () => {
    expect(typeof analyzeArray).toBe('function');
  });

  it('only accepts array of numbers', () => {
    expect(() => analyzeArray('1')).toThrow();
    expect(() => analyzeArray(1)).toThrow();
    expect(() => analyzeArray(1, 2, 3)).toThrow();
    expect(() => analyzeArray(['1', 2, 3])).toThrow();
    expect(() => analyzeArray([1, 2, 3])).not.toThrow();
  });

  it("returns object with 'average', 'min', 'max' and 'length' props", () => {
    const { average, min, max, length } = analyzeArray([]);
    expect(average).toBeDefined();
    expect(min).toBeDefined();
    expect(max).toBeDefined();
    expect(length).toBeDefined();
  });

  it('properly finds min', () => {
    expect(analyzeArray([1, 2, 3]).min).toBe(1);
    expect(analyzeArray([5, 2, 7, 6, 9]).min).toBe(2);
  });

  it('properly finds max', () => {
    expect(analyzeArray([1, 2, 3]).max).toBe(3);
    expect(analyzeArray([5, 2, 7, 6, 9]).max).toBe(9);
  });

  it('calculates average', () => {
    expect(analyzeArray([1, 2, 3]).average).toBe(2);
    expect(analyzeArray([5, 2, 7, 6, 9]).average).toBe(5.5);
  });

  it('counts amount of numbers in array', () => {
    expect(analyzeArray([]).length).toBe(0);
    expect(analyzeArray([1, 2, 3]).length).toBe(3);
    expect(analyzeArray([5, 2, 7, 6, 9]).length).toBe(5);
  });
});
