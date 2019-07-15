require('../src/data.js'); 
require('../src/data/lol/lol.js'); 


describe('ord', () => { 
  it('is a function', () => { 
      expect(typeof ord).toBe('function'); 
  });

  // it('returns `Aatrox`', () => { //segunda sentencia
  //     expect(window.filterData('name', 'Aatrox', window.lol.results)[0].name).toBe('Aatrox'); //Llama la función de filterData. Tiene 3 parametros(key, value, data)
  // });

  // it('returns `There are 44 Mortys`', () => {
  //     expect(window.ord('name', 'Aatrox', window.lol.results).length).toBe(1);
  // });
});

