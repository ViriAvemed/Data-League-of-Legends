// let cardGeneral= document.getElementById("cardGeneral");
// cardGeneral.insertAdjacentHTML("afterbegin",  `<section id="prueba"></section>`);

// Llamado de div para puntar las tarjetas
const prueba = document.getElementById('prueba');
const boton2 = document.getElementById("seaForName");
const boton = document.getElementById("eliminar");

const result = window.data.championSearch(LOL.data);


//Función para puntar todas las tarjetas con las propiedades seleccionadas en el data.js
let volverpintar = () => {
  result.forEach(element => {
      
    card =`<div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src="${element.splash}" class="i">
    </div>
    <div class="flip-card-back">
    <h1 style="color:#9d7f43;">${element.name}</h1> 
    <h4 style="color:#9d7f43;">"${element.title}"</h4> 
    <p id="tags" class="p">${element.tags}</p>
    <p class="p">Ataque: ${element.info.attack} ~~ Defensa: ${element.info.defense}</p>
    <p  class="p">Magia: ${element.info.magic} ~~ Dificultad: ${element.info.difficulty}</p>
     <p class="p" >Vida:  ${element.stats.hp} ~~ Mana: ${element.stats.mp}</p>
     <p class="p" >Regen. de vida:  ${element.stats.hpregen} ~~ Vida por nivel:  ${element.stats.hpperlevel}</p>
    <p  class="p" >Vel de mov.:  ${element.stats.movespeed} ~~ Vel. de ataque:  ${element.stats.attackspeedoffset}</p>
    <p id="attackdamage" class="p" >Daño de ataque:  ${element.stats.attackdamage}</p>
    </div>
    </div>
    </div>`

    prueba.insertAdjacentHTML("beforeend", card);
  });
}


// //Función para ordenar de la A a la Z
// let orderAZ = result.sort((a,b) =>{

// if (a.name > b.name){
// return 1
// }
// return -1
// });
// // console.log(orderAZ);



//Función para borrar tajetas de todos los campeones
let borrar = () =>{
  document.getElementById("prueba").innerHTML=""
}

//Detonar botón para borrar tarjetas
boton.addEventListener("click",borrar);

//Detonar botón para puntar todas las tarjetas
boton2.addEventListener("click",volverpintar);


// let searchName = () =>{
// result.filter (result => result.name ===document.getElementById ("buscName").value)
// };

// document.getElementById("buscName");

// buscName.addEventListener("change", searchName);


//Función para filtrar campeones por mayor ataque

let attack=document.getElementById("ataque").value;
let printattack=() =>{
    let newarray = result.filter (result => result.info.attack ==="10");
    volverpintar(newarray);
// console.log(printattack);

};
borrar();
attack.addEventListener("change",printattack);






//Función para filtrar campeones por mayor defensa
let defense = result.filter(result => result.info.defense >=9);
// console.log (defense);


//Función para filtrar campeones por mayor magia
let magic = result.filter(result => result.info.magic ===10);
// console.log (magic);


//Función para filtrar campeones por mayor dificultad
let difficulty = result.filter (result => result.info.difficulty ===10);
// console.log (difficulty);
