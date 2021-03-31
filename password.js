const args = process.argv[2];
const obfuscate = function(args) {
  let obfuscatePassword = '';
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "a") {
      obfuscatePassword += "4";
    } else if (args[i] === "e") {
      obfuscatePassword += "3";
    } else if (args[i] === "o") {
      obfuscatePassword += "0";
    } else if (args[i] === "l") {
      obfuscatePassword += "1";
    } else {
      obfuscatePassword += args[i];
    }
  }
  console.log(obfuscatePassword);
};
obfuscate(args);

// Every "a" in the string should be replaced with a "4".
// Every "e" in the string should be replaced with a "3".
// Every "o" (oh) in the string should be replaced with a "0" (zero).
// Every "l" (el) in the string should be replaced with a "1" (one).