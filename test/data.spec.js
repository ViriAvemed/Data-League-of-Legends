require('../src/data.js'); 
// const LOL =require('../src/data/lol/lol.js'); 

const newarrayData =window.data.debugData;
console.log(newarrayData);
// const arrayDebug =window.data.arrayDebug;

const filterbyletter = window.data.filterbyletter;
// const filterByBestChampions = window.data.filterByBestChampions;
// const arrayDebug =window.data.arrayDebug;
// const order = window.data.filterbylettern;

const input = [
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',name: 'Aatrox', title: 'the Darkin Blade', info: { attack: 8, defense: 4, magic: 3, difficulty: 4 }, tags: ['Fighter', 'Tank']},
  {splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',name: 'Bard', title: 'the Wandering Caretaker', info: { attack: 4, defense: 4, magic: 5, difficulty: 9 }, tags: ['Support', 'Mage']},
  {splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg',name: 'Caitlyn', title: 'the Sheriff of Piltover', info: { attack: 8, defense: 2, magic: 2, difficulty: 6 }, tags: ['Marksman']},
  {splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg',name: 'Darius', title: 'the Hand of Noxus', info: { attack: 9, defense: 5, magic: 1, difficulty: 2 }, tags: ['Fighter', 'Tank']}
];

const output = [
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg', name: 'Aatrox', title: 'the Darkin Blade', info: { attack: 8, defense: 4, magic: 3, difficulty: 4 }, tags: ['Fighter', 'Tank'], stats: {attackdamage: 60.376, attackdamageperlevel: 3.2 }},
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg', name: 'Bard', title: 'the Wandering Caretaker', info: { attack: 4, defense: 4, magic: 5, difficulty: 9 }, tags: ['Support', 'Mage'], stats: {attackdamage: 52, attackdamageperlevel: 3 }},
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg', name: 'Caitlyn', title: 'the Sheriff of Piltover', info: { attack: 8, defense: 2, magic: 2, difficulty: 6 }, tags: ['Marksman'], stats: {attackdamage: 53.66, attackdamageperlevel: 2.18 }},
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg', name: 'Darius', title: 'the Hand of Noxus', info: { attack: 9, defense: 5, magic: 1, difficulty: 2 }, tags: ['Fighter', 'Tank'], stats: {attackdamage: 56, attackdamageperlevel: 5 }}
];



describe('debugData', ()=>{
  it('Deberìa ser una función', () =>{
    expect(typeof debugData).toBe('function');
  });
});

describe('filterByletter', ()=>{
  it('Deberìa ser una función', () =>{
    expect(typeof filterbyletter).toBe('function');
    
  });
  it('debería retornar Aatrox', () =>{
    expect(filterbyletter('A', input).toEqual(output));
  });
});

// describe('filterByBestChampions', ()=>{
//   it('Deberìa ser una función', () =>{
//     expect(typeof filterByBestChampions).toBe('function');
//     // console.log(debugData);
//   });
//   it('debería retornar a los mejores en ataque', () =>{
//     expect(filterByBestChampions('attack',input).toBe(input));
//   });
// });