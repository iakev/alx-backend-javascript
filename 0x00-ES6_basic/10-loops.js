export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (let val of array) {
    val = appendString + val;
    arr.push(val);
  }

  return arr;
}
