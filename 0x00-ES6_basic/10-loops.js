export default function appendToEachArrayValue(array, appendString) {
  let arr = [];
  for (let val of array) {
    val = appendString + val;
    arr.push(val);
  }

  return arr;
}
