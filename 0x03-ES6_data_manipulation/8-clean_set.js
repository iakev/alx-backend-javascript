export default function cleanSet(set, startString) {
  if (startString.length == 0) {
    return '';
  }
  const resultStrArr = [];
  for (const item of set) {
    if (item.slice(0, startString.length) === startString) {
      resultStrArr.push(`${item.slice(startString.length)}`);
    }
  }
  const resultStr = resultStrArr.join('-');
  return resultStr;
}
