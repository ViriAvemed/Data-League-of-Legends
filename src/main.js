// let cardGeneral= document.getElementById("cardGeneral");
// cardGeneral.insertAdjacentHTML("afterbegin",  `<section id="prueba"></section>`);

const prueba = document.getElementById('prueba')

const result = window.data.championSearch(LOL.data);

result.forEach(element => {
    card=
    `<div id="cardGen" class="cardGen">
    <div id="cardChampion" class="cardChampion">
    <div id= "card-text" class="card-text">
        <p>${element.name}</p>
        <p>${element.title}</p>
        <p>${element.tags}</p>
    </div>  
    <tr id="card-imagen class="card-imagen" align="middle"  ><img src="${element.splash}" width="100%" height="auto" </tr>
    <div id "card-atributos" class="card-atributos">
        <p>attack ${element.info.attack}</p>
        <p>defense ${element.info.defense}</p>
        <p>magic ${element.info.magic}</p>
        <p>difficulty ${element.info.difficulty}</p>
        <p>movespeed ${element.stats.movespeed}</p>
        <p>attackdamage ${element.stats.attackdamage}</p>
        <p>attackspeedoffset ${element.stats.attackspeedoffset}</p>
        <p>hp ${element.stats.hp}</p> 
        <p>hp regen ${element.stats.hpregen}</p>
        <p>hp per level ${element.stats.hpperlevel}</p>
        <p>mp ${element.stats.mp}</p>
   
    </div>
    </div>
    </div>`
    prueba.insertAdjacentHTML("beforeend",card);
});

let orderAZ = result.sort((a,b) =>{

if (a.name > b.name){
return 1
}
return -1
});
console.log(orderAZ);
