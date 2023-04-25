export default function setFromArray(array) {
  if (Array.isArray(array)) {
    return new Set(array);
  }
  throw new Error('Expected an Array argument');
}
