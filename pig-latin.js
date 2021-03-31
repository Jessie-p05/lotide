const args = process.argv;
for (let i = 2; i < args.length; i++) {
  let pigArgs = '';
  for (let j = 1; j < args[i].length; j++) {
    pigArgs = pigArgs + args[i][j];
  }
  pigArgs = `${pigArgs}${args[i][0]}ay`;
  console.log(pigArgs);
}