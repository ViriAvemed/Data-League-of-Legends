// const LOL = window.LOL=LOL;
const arrayDebug = window.data.debugData(LOL.data); // Variable que contiene la data depurada 
// const ord = window.data.ord (LOL.data);
// const orderChampions =window.data.orderChampions (LOL.data);
const inputName = document.getElementById("id-searchByName"); // Variable que llama a la caja de búsqueda por nombre
const buttonDataBox = document.getElementById("id-dataBox"); // Variable que llama a la caja donde se imprime toda la data
const buttonSearchName = document.getElementById("id-buttonSearchByName"); // Botón para ejecutar la búsqueda por nombre
const deleteDataBox = document.getElementById("id-dataBox"); // Llamado de caja para borrar la data
const selectRol = document.getElementById("id-filterByRol"); // Selector que filtra por rol
const bestAttributes = document.getElementById("id-filterByAttribute"); //Selector que filtra por atributo

const optionToOrder  = document.getElementById("id-orderABC"); //Selector que ordena de la A a la Z



// Función que pinta toda la data a partir de la data filtrada
let printData = (arrayDebug) => {
  deleteDataBox.innerHTML="";
  arrayDebug.forEach(element => {
    let card = `<div class="flip-card">\n    <div class="flip-card-inner">\n    <div class="flip-card-front">\n    <img src="${element.splash}" class="i" alt="Imagen de jugador">\n    </div>\n    <div class="flip-card-back">\n    <h1 style="color:#9d7f43;">${element.name}</h1> \n    <h4 style="color:#9d7f43;">"${element.title}"</h4> \n    <p id="tags" class="p">${element.tags}</p>\n    <p class="p">Ataque: ${element.info.attack} ~ Defensa: ${element.info.defense}</p>\n    <p  class="p">Magia: ${element.info.magic} ~ Dificultad: ${element.info.difficulty}</p>\n     <p class="p" >Vida:  ${element.stats.hp} ~ Mana: ${element.stats.mp}</p>\n     <p class="p" >Regen. de vida:  ${element.stats.hpregen} ~ Vida por nivel:  ${element.stats.hpperlevel}</p>\n    <p  class="p" >Vel de mov.:  ${element.stats.movespeed} ~~ Vel. de ataque:  ${element.stats.attackspeedoffset}</p>\n    <p id="attackdamage" class="p" >Daño de ataque:  ${element.stats.attackdamage}</p>\n    </div>\n    </div>\n    </div>`;
    buttonDataBox.insertAdjacentHTML("beforeend", card);
  });
  return printData;
};



// Función que permite la búsqueda por nombre de cada campeón
const SearchChampion = () =>{

  let valueBySearch = inputName.value;
  let newArray = arrayDebug.filter(function (el) {
    return el.name.toLowerCase().indexOf(valueBySearch) !== -1;
  });
  printData(newArray);
};

// Función que permite el filtrado por rol
const ShowByRol = () =>{
  let chosenValue = selectRol.value;
  let newArrayRol = arrayDebug.filter(function (el) {
    return el.tags[0].indexOf(chosenValue) !== -1;
  });
  printData(newArrayRol);
};



// Función que filtra a los mejores campeones según su atributo
const ShowBestChampions = () =>{
  let attributes = bestAttributes.value;
  let newArray=arrayDebug.filter (arrayDebug => arrayDebug.info[attributes] >9);
  printData(newArray);

};

const ord =() => {
  let sorted = arrayDebug.sort((a, b) => {
    let selectedOption = optionToOrder.value;
    if (selectedOption === "A" ){
      return ((a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0));
    }
    else if (selectedOption === "Z" ){
      return ((a.name > b.name) ? -1 : ((a.name < b.name) ? 1 : 0));
    }
    });
  printData(sorted);
};


const prom1= ()=> {
  let chosenValue = selectRol.value;
  let newArrayRol = arrayDebug.filter(function (el) {
    return el.tags[0].indexOf(chosenValue) !== -1;
  });
  let rolAverage =newArrayRol.length*100 /134;
  // return (rolAverage);
  document.getElementById("id_result").innerHTML = "Sabías que del total de campeones los " + chosenValue + " representan el " + rolAverage + "%.";
};






bestAttributes.addEventListener("change",ShowBestChampions); // Llamado de evento de selector para seleccionar mejores atributos
buttonSearchName.addEventListener("click",SearchChampion); // Llamado evento de botón para buscar por nombre de campeón
selectRol.addEventListener("change",ShowByRol);//Llamado de evento de selector para ordenar por rol
optionToOrder.addEventListener("change",ord); //Llamado de evento de selector para ordenar de la A a la Z y viceversa
selectRol.addEventListener("change", prom1);

