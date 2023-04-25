export default function cleanSet(set, startString) {
  const resultStrArr = [];
  for (const item of set) {
    if (item.slice(0, 3) === startString) {
      resultStrArr.push(`${item.slice(3)}`);
    }
  }
  const resultStr = resultStrArr.join('-');
  return resultStr;
}
