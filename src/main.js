

const arrayDebug = window.data.debugData(LOL.data);
const inputName = document.getElementById("id-searchByName");
const buttonDataBox = document.getElementById("id-dataBox");
const buttonSearchName = document.getElementById("id-buttonSearchByName");
const buttonHideChampions = document.getElementById("id-HideChampions");
const buttonShowChampions = document.getElementById("id-showChampions");
const selectRol = document.getElementById("id-filterByRol");
const selectOrder = document.getElementById("id-orderABC");
const bestAttributes = document.getElementById("id-filterByAttribute");
const optionToOrder= document.getElementById("id-orderABC");
const deleteDataBox=document.getElementById("id-dataBox");



let printData = (arrayDebug) => {
  arrayDebug.forEach(element => {
     card = `<div class="flip-card">

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

    buttonDataBox.insertAdjacentHTML("beforeend", card);
  });
  return printData;
};



//Función para borrar tajetas de todos los campeones

let deleteData = () =>{
  deleteDataBox.innerHTML=""
};


const orderChampions = () =>{
    let selectedOption = optionToOrder.value;
    let newArrayOrdered;
  deleteData();
    if(selectedOption === 'D'){
      newArrayOrdered = arrayDebug.reverse();
      printData(newArrayOrdered);
    }else if(selectedOption === 'A'){
      newArrayOrdered = arrayDebug;
      printData(newArrayOrdered);




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




bestAttributes.addEventListener("change",ShowBestChampions);//Detonar botón para puntar todas las tarjetas
buttonShowChampions.addEventListener("click",printData);//Detonar botón para borrar tarjetas
buttonHideChampions.addEventListener("click",deleteData);
buttonSearchName.addEventListener("click",SearchChampion);
selectRol.addEventListener("change",ShowByRol);
selectOrder.addEventListener("change",orderChampions);


// Filtra a los campeones por mejor atributo
let bestAttack=document.getElementById("champFilter")
const printattack = () =>{
    let atributos = bestAttack.value;
    let attack=result.filter (result => result.info[atributos] >9);
    borrar();
    volverpintar(attack);
}


bestAttack.addEventListener("change",printattack); // Detonar selector para cambiar de atributo
