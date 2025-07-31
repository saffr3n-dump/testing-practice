export default function capitalize(string) {
  string = String(string);
  return string[0].toUpperCase() + string.slice(1);
}
