const newLine = '\n';
process.stdout.write(`Welcome to Holberton School, what is your name?${newLine}`);
process.stdin.on('readable', () => {
  const userName = process.stdin.read();
  if (userName !== null) {
    process.stdout.write(`Your name is: ${userName}`);
    // process.exitCode = 1;
  }
});
const handle = () => {
  process.stdout.write(`This important software is now closing${newLine}`);
  process.exit();
};
process.stdin.on('close', handle);
process.on('SIGTERM', handle);
process.on('SIGINT', handle);
