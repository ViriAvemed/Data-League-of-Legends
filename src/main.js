const prueba = document.getElementById('prueba');// Llamado de div para pintar las tarjetas
const boton2 = document.getElementById('seaForName');// Botón que busca al campeón por nombre
const boton = document.getElementById("eliminar");// Botón que esconde todas las tarjetas
const change1 = document.getElementById('champFilter');// Menú desplegable que filtra a los campeones por atributo
const change2 = document.getElementById('filterRol');// Menú desplegable que filtra a los campeones por rol
const change3 = document.getElementById('filterRol2');// Menú desplegable que ordena a los campeones de la A a la Z y viceversa
const result = window.data.championSearch(LOL.data); // Llamado del archivo data.js 


const volverpintar =(result) => {// Función que pinta toda la data deseada
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
  return volverpintar;
};



//Función para borrar tajetas de todos los campeones
let borrar = () =>{
  document.getElementById("prueba").innerHTML=""
}


// Función que ordena de la A a la Z y viceversa
const orden = () =>{
    let val=change3.value;
    let newArray;
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

// Función que permite la búsqueda por nombre de cada campeón
  const buscarNombre = () =>{
    let valorabuscar = document.getElementById('buscName').value;
    let newArray = result.filter(function (el) {
      return el.name.toLowerCase().indexOf(valorabuscar) !== -1;
    });
    borrar();
    volverpintar(newArray);
  };

// Función que permite el filtrado por rol
  let rol = () =>{
    let valorabuscar = document.getElementById('filterRol').value;
    let newArray = result.filter(function (el) {
      return el.tags.indexOf(valorabuscar) !== -1;
  
    });
    borrar();
    volverpintar(newArray);
  };


boton2.addEventListener("click",volverpintar);//Detonar botón para puntar todas las tarjetas
boton.addEventListener("click",borrar);//Detonar botón para borrar tarjetas
boton2.addEventListener("click",buscarNombre); // Detonar botón para búsqueda por nombre
change2.addEventListener("change",rol); // Detonar selector para cambio de rol
change3.addEventListener("change",orden); // Detonar selector para cambio de orden




// Filtra a los campeones por mejor atributo
let bestAttack=document.getElementById("champFilter")
const printattack = () =>{
    let atributos = bestAttack.value;
    let attack=result.filter (result => result.info[atributos] >9);
    borrar();
    volverpintar(attack);
}


bestAttack.addEventListener("change",printattack); // Detonar selector para cambiar de atributo
