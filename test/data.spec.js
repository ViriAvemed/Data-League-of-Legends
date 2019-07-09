const data = require('../src/data.js');

describe('championSearch()', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof data, 'object');
  });
  

});

describe('data.championSearch', () => {

  it('debería ser una función', () => {
    assert.equal(typeof data.championSearch, 'function');
  });
});
