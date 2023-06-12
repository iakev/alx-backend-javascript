module.exports = function displayMessage(string) {
  const newline = '\n';
  process.stdout.write(`${string}${newline}`);
};
