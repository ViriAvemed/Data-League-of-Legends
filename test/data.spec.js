require('../src/data.js'); 
require('../src/data/lol/lol.js'); 


describe('filterByBestChampions', () => { //describe = palabra reservada que contiene las funciones para ejecutar los test.
  it('is a function', () => { // it = palabra reservada que contiene el enunciado en caso de que el test sea correcto o incorrecto (sentencia).
      expect(typeof filterByBestChampions).toBe('function'); //test dentro de la palabra reservada expect.
  });
});
