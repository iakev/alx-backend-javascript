export default function updateUniqueItems(map) {
  for (const [key, value] of map) {
    if (value === 1) {
      try {
        map.set(key, 100);
      } catch (error) {
        throw new TypeError('Cannot process');
      }
    }
  }
  return map;
}
