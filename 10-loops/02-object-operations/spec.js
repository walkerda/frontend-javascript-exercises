var expect = require('chai').expect;
var challenge = require('./challenge');
var _ = require('underscore');

describe("copy", function() {
  it("should be defined", function() {
    expect(challenge.copy).to.exist;
  });

  it("should create a new object with a copy of all the data", function() {
    orig = {name: "Rob"};
    result = challenge.copy(orig);
    expect(result).to.not.equal(orig);
    expect(result).to.deep.eql(orig);
  });

    it ("should create a copy of an array", function () {
        var array = [1,2,3];
        result = challenge.copy(array);
        console.log(result);
    })
});

describe("extend", function() {
  it("should be defined", function() {
    expect(challenge.extend).to.exist;
  });

  it("should correctly extends two hashes that are unique", function() {
    dest = { name: "Computer", cost: "$1,000" };
    src = { first_name: "Bob", age: 34 };
    result = challenge.extend(dest, src);

    expect(result).to.equal(dest, "Returned hash must be the same as the original destination hash.");
    expect(result).to.have.keys(['name', 'cost', 'first_name', 'age']);
  });

  it("should correctly extend two hashes that are have keys in common", function() {
    dest = { name: "Computer", cost: "$1,000" };
    src = { name: "Mouse", uuid: "1234" };
    result = challenge.extend(dest, src);

    expect(result).to.have.keys(['name', 'cost', 'uuid']);
    expect(result).to.have.property('name', 'Mouse');
    expect(result).to.have.property('cost', '$1,000');
  });
});


describe("hasElems", function() {
  var h = {};
  beforeEach(function() {
    h = { name: "Computer", cost: "$1,000" };
  });

  it("should be defined", function() {
    expect(challenge.hasElems).to.exist;
  });

  it("returns true for an empty array", function() {
    expect(challenge.hasElems(h, [])).to.be.true;
  });


  it("returns true if it has all the keys", function() {
    keys = ['name', 'cost']
    expect(challenge.hasElems(h, keys)).to.be.true;
  });

  it("returns false if one or more of the keys isn't in the hash", function() {
    var keys = ['name', 'bio', 'cost'];
    expect(challenge.hasElems(h, keys)).to.be.false;
  });
});
