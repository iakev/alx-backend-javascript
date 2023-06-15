module.exports = function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    const roundA = Math.round(a);
    const roundB = Math.round(b);
    const sum = roundA + roundB;
    return sum;
  } else if (type === 'SUBTRACT') {
    const roundA = Math.round(a);
    const roundB = Math.round(b);
    const difference = roundA - roundB;
    return difference;
  } else if(type === 'DIVIDE') {
    const roundA = Math.round(a);
    const roundB = Math.round(b);
    if (roundB === 0) {
      return 'Error'
    }
    const quotient = roundA / roundB;
    return quotient;
  }
};
