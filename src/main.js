// let cardGeneral= document.getElementById("cardGeneral");
// cardGeneral.insertAdjacentHTML("afterbegin",  `<section id="prueba"></section>`);

const prueba = document.getElementById('prueba');

const result = window.data.championSearch(LOL.data);


function volverpintar () {
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

// let orderAZ = result.sort((a,b) =>{
//
// if (a.name > b.name){
// return 1
// }
// return -1
// });
// console.log(orderAZ);

const boton = document.getElementById("eliminar");

function borrar (){
  document.getElementById("prueba").innerHTML=""
}
boton.addEventListener("click",borrar);


const boton2 = document.getElementById("seaForName");

boton2.addEventListener("click",volverpintar);







//
