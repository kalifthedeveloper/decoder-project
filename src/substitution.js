// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
const normalAbc = "abcdefghijklmnopqrstuvwxyz";
    let secretCode = "";

    if (!alphabet || alphabet.length != 26 || /([a-z]).*?\1/g.test(alphabet))
      return false;

    for (let letter of input.toLowerCase()) {
      if (letter === " ") {
        secretCode += letter;
      } else {
        if (encode === false) {
          let actualIndex = alphabet.indexOf(letter);
          secretCode += normalAbc[actualIndex];
        } else {
          let letterIndex = normalAbc.indexOf(letter);
          secretCode += alphabet[letterIndex];
        }
      }
    }
    return secretCode;  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };