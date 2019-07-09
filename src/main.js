<<<<<<< HEAD
const arrayDebug = window.data.debugData(LOL.data); // Variable que contiene la data depurada
const inputName = document.getElementById("id-searchByName"); // Variable que llama a la caja de búsqueda por nombre
const buttonDataBox = document.getElementById("id-dataBox"); // variable que llama a la caja donde se imprime toda la data
const buttonSearchName = document.getElementById("id-buttonSearchByName"); // Botón para ejecutar la búsqueda por nombre
const deleteDataBox=document.getElementById("id-dataBox"); // Llamado de caja para borrar la data
const buttonHideChampions = document.getElementById("id-HideChampions"); // Botón que borra toda la data
const selectRol = document.getElementById("id-filterByRol"); // Selector que filtra por rol
const bestAttributes = document.getElementById("id-filterByAttribute"); // Selector que filtra por atributo
const selectOrder = document.getElementById("id-orderABC"); // Selector que ordena de la A a la Z
const optionToOrder= document.getElementById("id-orderABC");// Selector que ordena de la Z a la Z



<<<<<<< HEAD
// Función que pinta toda la data a partir de la data filtrada
=======

>>>>>>> 2d689e064d82268a1a11fd3f5d0531d4d3b94341
let printData = (arrayDebug) => {
  arrayDebug.forEach(element => {
    let card = `<div class="flip-card">\n    <div class="flip-card-inner">\n    <div class="flip-card-front">\n    <img src="${element.splash}" class="i" alt="Imagen de jugador">\n    </div>\n    <div class="flip-card-back">\n    <h1 style="color:#9d7f43;">${element.name}</h1> \n    <h4 style="color:#9d7f43;">"${element.title}"</h4> \n    <p id="tags" class="p">${element.tags}</p>\n    <p class="p">Ataque: ${element.info.attack} ~~ Defensa: ${element.info.defense}</p>\n    <p  class="p">Magia: ${element.info.magic} ~~ Dificultad: ${element.info.difficulty}</p>\n     <p class="p" >Vida:  ${element.stats.hp} ~~ Mana: ${element.stats.mp}</p>\n     <p class="p" >Regen. de vida:  ${element.stats.hpregen} ~~ Vida por nivel:  ${element.stats.hpperlevel}</p>\n    <p  class="p" >Vel de mov.:  ${element.stats.movespeed} ~~ Vel. de ataque:  ${element.stats.attackspeedoffset}</p>\n    <p id="attackdamage" class="p" >Daño de ataque:  ${element.stats.attackdamage}</p>\n    </div>\n    </div>\n    </div>`
=======


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

>>>>>>> d90750f4296d06fd7e6c54349baeabade93b697d
    buttonDataBox.insertAdjacentHTML("beforeend", card);
  });
  return printData;
};

<<<<<<< HEAD
// Función para borrar toda la data
=======


<<<<<<< HEAD
>>>>>>> 2d689e064d82268a1a11fd3f5d0531d4d3b94341
=======
//Función para borrar tajetas de todos los campeones

>>>>>>> d90750f4296d06fd7e6c54349baeabade93b697d
let deleteData = () =>{
  deleteDataBox.innerHTML=""
};

// Función que ordena a los campeones de la A a la Z y viceversa
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

<<<<<<< HEAD
<<<<<<< HEAD
// Función que permite la búsqueda por nombre de cada campeón
=======
>>>>>>> 2d689e064d82268a1a11fd3f5d0531d4d3b94341
  const SearchChampion = () =>{
=======
>>>>>>> d90750f4296d06fd7e6c54349baeabade93b697d


<<<<<<< HEAD
  // Función que permite el filtrado por rol
=======

<<<<<<< HEAD
>>>>>>> 2d689e064d82268a1a11fd3f5d0531d4d3b94341
  const ShowByRol = () =>{
    let chosenValue = selectRol.value;
    let newArrayRol = arrayDebug.filter(function (el) {
      return el.tags.indexOf(chosenValue) !== -1;
    });
    deleteData();
    printData(newArrayRol);
  };

<<<<<<< HEAD
// Función que filtra a los mejores campeones según su atributo
=======
// Filtra a los campeones por mejor atributo
>>>>>>> 2d689e064d82268a1a11fd3f5d0531d4d3b94341
const ShowBestChampions = () =>{
    let attributes = bestAttributes.value;
    let newArray=arrayDebug.filter (arrayDebug => arrayDebug.info[attributes] >9);
  deleteData();
  printData(newArray);

};


<<<<<<< HEAD
bestAttributes.addEventListener("change",ShowBestChampions); // Llamado de evento de selector para seleccionar mejores atributos
buttonHideChampions.addEventListener("click",deleteData); // Llamado de evento de botón para borrar la data
buttonSearchName.addEventListener("click",SearchChampion); // Llamado de evento de para buscar por nombre de campeón
selectRol.addEventListener("change",ShowByRol); // Llamado de evento de selector de para ordenar por rol
selectOrder.addEventListener("change",orderChampions); // Llamado de evento de selector para ordenar de la A a la Z y viceversa



=======
=======
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

>>>>>>> d90750f4296d06fd7e6c54349baeabade93b697d



bestAttributes.addEventListener("change",ShowBestChampions);//Detonar botón para puntar todas las tarjetas
buttonShowChampions.addEventListener("click",printData);//Detonar botón para borrar tarjetas
buttonHideChampions.addEventListener("click",deleteData);
buttonSearchName.addEventListener("click",SearchChampion);
selectRol.addEventListener("change",ShowByRol);
selectOrder.addEventListener("change",orderChampions);
<<<<<<< HEAD
>>>>>>> 2d689e064d82268a1a11fd3f5d0531d4d3b94341
=======


// Filtra a los campeones por mejor atributo
let bestAttack=document.getElementById("champFilter")
const printattack = () =>{
    let atributos = bestAttack.value;
    let attack=result.filter (result => result.info[atributos] >9);
    borrar();
    volverpintar(attack);
}


bestAttack.addEventListener("change",printattack); // Detonar selector para cambiar de atributo
>>>>>>> d90750f4296d06fd7e6c54349baeabade93b697d
