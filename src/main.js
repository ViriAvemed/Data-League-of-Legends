// let cardGeneral= document.getElementById("cardGeneral");
// cardGeneral.insertAdjacentHTML("afterbegin",  `<section id="prueba"></section>`);

const prueba = document.getElementById('prueba')


const result = window.data.championSearch(LOL.data);

result.forEach(element => {

prueba.insertAdjacentHTML("beforeend",  `<p id="prueba">${element.name}</p>`);

    
});



