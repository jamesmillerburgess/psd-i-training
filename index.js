// james -> James
// JAMES -> JAMES

const convertName = (name) => {
    let names = name.split(' ');
    for(let i = 0; i < names.length; i++) {
        names[i] = names[i][0].toUpperCase() + names[i].slice(1);
    }
    return names.join(' ');
};

// UNIT TEST
describe('convertName', () => {
  it('capitalizes the first letter of james', () => {
    convertName('james').should.equal('James');
  });
  it('capitalizes the first letter of nesrin', () => {
    convertName('nesrin').should.equal('Nesrin');
  });
  it('capitalizes the first letter of both names in micheline greber', () => {
    convertName('micheline greber').should.equal('Micheline Greber');
  });
  it('fixes #0023895 JAMES -> James', () => {
    convertName('JAMES').should.equal('James');
  });
})

mocha.run();
