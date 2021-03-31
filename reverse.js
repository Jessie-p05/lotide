const args = process.argv;
for (let i = 2; i < args.length; i++) {
  let reverseArgs = '';
  for (let j = args[i].length - 1; j >= 0; j--) {
    reverseArgs = reverseArgs+ args[i][j];
  }
  console.log(reverseArgs);
}
