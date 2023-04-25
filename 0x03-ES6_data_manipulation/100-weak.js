export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  if (weakMap.has(endPoint)) {
    let count = weakMap.get(endPoint);
    count += 1;
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endPoint, count);
  } else {
    weakMap.set(endPoint, 1);
  }
}
