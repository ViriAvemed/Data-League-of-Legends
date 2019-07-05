// let cardGeneral= document.getElementById("cardGeneral");
// cardGeneral.insertAdjacentHTML("afterbegin",  `<section id="prueba"></section>`);

// Llamado de div para puntar las tarjetas
const prueba = document.getElementById('prueba');
const boton2 = document.getElementById("seaForName");
const boton = document.getElementById("eliminar");

const result = window.data.championSearch(LOL.data);
const boton = document.getElementById("eliminar");
const boton2 = document.getElementById("seaForName");
const change1 = document.getElementById('champFilter');
const change2 = document.getElementById('filterRol');
const change3 = document.getElementById('filterRol2');


<<<<<<< HEAD
//Función para puntar todas las tarjetas con las propiedades seleccionadas en el data.js
let volverpintar = () => {
  result.forEach(element => {
      
=======

const volverpintar =(results) => {
  results.forEach(element => {
>>>>>>> 5e238b478ffdc5377e1ed95443653a621195d3a9
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
<<<<<<< HEAD
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
=======
  return volverpintar;
};


const borrar = () =>{
  document.getElementById("prueba").innerHTML=""
};
>>>>>>> 5e238b478ffdc5377e1ed95443653a621195d3a9

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


<<<<<<< HEAD
=======
const orden = () =>{
  let val=change3.value;
  let newArray;
>>>>>>> 5e238b478ffdc5377e1ed95443653a621195d3a9

  borrar();
  const result1 = window.data.championSearch(LOL.data);
  if(val==='D'){
    newArray=result1.reverse()
    volverpintar(newArray);
  }else if(val==='A'){
    newArray=result1;
    volverpintar(newArray);
  }

};

const buscarNombre = () =>{

<<<<<<< HEAD
//Función para filtrar campeones por mayor defensa
let defense = result.filter(result => result.info.defense >=9);
// console.log (defense);
=======
  let valorabuscar = document.getElementById('buscName').value;
  let newArray = result.filter(function (el) {
    return el.name.toLowerCase().indexOf(valorabuscar) !== -1;
  });
  borrar();
  volverpintar(newArray);

};
>>>>>>> 5e238b478ffdc5377e1ed95443653a621195d3a9

const rol = () =>{
  let valorabuscar = document.getElementById('filterRol').value;
  let newArray = result.filter(function (el) {
    return el.tags.indexOf(valorabuscar) !== -1;

<<<<<<< HEAD
//Función para filtrar campeones por mayor magia
let magic = result.filter(result => result.info.magic ===10);
// console.log (magic);
=======
  });
  borrar();
  volverpintar(newArray);
>>>>>>> 5e238b478ffdc5377e1ed95443653a621195d3a9

};

boton.addEventListener("click",borrar);
boton2.addEventListener("click",buscarNombre);
// change1.addEventListener("change",mejoresCampeones);
change2.addEventListener("change",rol);
change3.addEventListener("change",orden);

//Función para filtrar campeones por mayor dificultad
let difficulty = result.filter (result => result.info.difficulty ===10);
// console.log (difficulty);
