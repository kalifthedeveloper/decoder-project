const {caesar} = require("../src/caesar.js");

const expect = require("chai").expect;

describe("caesar", () => {
    it("Should return the input as a coded message after moving the letters to the right by the shift number input", () => {
      const actual = caesar("thinkful", 3);
      const expected = 'wklqnixo';
    expect(actual).to.eql(expected);
    });

    it("Should return the input as a coded message after moving the letters to the left by the shift number input", () => {
       const actual = caesar("thinkful", -3);
       const expected = 'qefkhcri';
    expect(actual).to.eql(expected);
    });


    it("Should return the input as a decoded message after moving the letters to the right by the shift number entered", () => {
    const actual = caesar("wklqnixo", 3, false);
    const expected = 'thinkful';
    expect(actual).to.eql(expected);
    });

    it("Should encode a message after moving the letters to the right by the shift number entered", () => {
    const actual = caesar("This is a secret message!", 8);
    const expected = 'bpqa qa i amkzmb umaaiom!';
    expect(actual).to.eql(expected);
    });

    it("Should decode a message after moving the letters to the right by the shift number entered", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    const expected = 'this is a secret message!';
    expect(actual).to.eql(expected);
    });

    it("Should return 'false' if no shift number is entered", () => {
      const actual = caesar("thinkful");
      const expected = false
    expect(expected).to.be.false;
    });

    it("Should return 'false' if a shift number greater than 25 is entered", () => {
      const actual = caesar("thinkful", 99);
      const expected = false;
    expect(actual).to.eql(expected);
    });

    it("Should return 'false' if a shift number less than -25 is entered", () => {
      const actual = caesar("thinkful", -26);
      const expected = false;
    expect(actual).to.eql(expected);
    });
});