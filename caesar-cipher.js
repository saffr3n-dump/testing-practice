const MIN_LOWER = 'a'.charCodeAt(0);
const MAX_LOWER = 'z'.charCodeAt(0);
const MIN_UPPER = 'A'.charCodeAt(0);
const MAX_UPPER = 'Z'.charCodeAt(0);

export default function caesarCipher(string, key) {
  if (typeof string !== 'string') {
    throw new TypeError('Only strings are allowed');
  }
  if (typeof key !== 'number') {
    throw new TypeError('Only numeric keys are allowed');
  }

  return string
    .split('')
    .map((char) => shiftChar(char, key))
    .join('');
}

function shiftChar(char, key) {
  const oldCode = char.charCodeAt(0);
  let min, max;
  if (isLower(oldCode)) {
    min = MIN_LOWER;
    max = MAX_LOWER;
  } else if (isUpper(oldCode)) {
    min = MIN_UPPER;
    max = MAX_UPPER;
  } else {
    return char;
  }
  const newCode = ((oldCode - min + key) % (max + 1 - min)) + min;
  return String.fromCharCode(newCode);
}

function isLower(code) {
  return isInRange(code, MIN_LOWER, MAX_LOWER);
}

function isUpper(code) {
  return isInRange(code, MIN_UPPER, MAX_UPPER);
}

function isInRange(n, min, max) {
  return n >= min && n <= max;
}
