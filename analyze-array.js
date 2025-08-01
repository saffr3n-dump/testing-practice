export default function analyzeArray(array) {
  if (!Array.isArray(array) || array.some((n) => typeof n !== 'number')) {
    throw new TypeError('Only number arrays are allowed');
  }

  return array.reduce(
    (res, n) => {
      if (res.min == null || res.min > n) res.min = n;
      if (res.max == null || res.max < n) res.max = n;
      res.average = (res.min + res.max) / 2;
      ++res.length;
      return res;
    },
    {
      average: null,
      min: null,
      max: null,
      length: 0,
    },
  );
}
