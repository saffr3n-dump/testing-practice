export default function reverseString(string) {
  string = String(string);
  return string.split('').reverse().join('');
}
