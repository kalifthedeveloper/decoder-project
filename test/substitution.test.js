const {substitution} = require("../src/substitution.js");

const expect = require("chai").expect;

describe("substitution", () => {
    
    it("Should encode the input", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'jrufscpw';
      expect(actual).to.eql(expected); 
    });

    it("Should encode the input with spaces", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
      expect(actual).to.eql(expected); 
    });

    it("Should decode the input", () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = 'thinkful';
      expect(actual).to.eql(expected); 
    });

    it("Should encode the message with characters", () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        const expected = "y&ii$r&";
      expect(actual).to.eql(expected); 
    });

    it("Should decode the input with characters", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = "message";
      expect(actual).to.eql(expected); 
    });

    it("Should return false if alphabet is less than 26 letters", () => {
        const actual = substitution("thinkful", "short");
        expect(actual).to.be.false;  
    });

    it("Should return false if alphabet repeats letters", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false;  
    });


});    
