// let cardGeneral= document.getElementById("cardGeneral");
// cardGeneral.insertAdjacentHTML("afterbegin",  `<section id="prueba"></section>`);

const prueba = document.getElementById('prueba')

const result = window.data.championSearch(LOL.data);

result.forEach(element => {
    card=
`<div id="cardGen" class="cardGen">
<div id="card-image" class="card-image">
    <p id="card-imagen class="card-imagen"><img src="${element.splash}" width: "5%" height:"5%"><p></div><br>
<div id= "card-text" class="card-text">
    <p>${element.name}</p>
    <p>${element.title}</p>
    <p>${element.tags}</p>
    <p>${element.info.attack}</p>
    <p>${element.info.defense}</p>
    <p>${element.info.magic}</p>
    <p>${element.info.difficulty}</p>
    <p>${element.stats.hp}</p>
    <p>${element.stats.hpperlevel}</p>
    <p>${element.stats.mp}</p>
    <p>${element.stats.mpperlevel}</p>
    <p>${element.stats.movespeed}</p>
    <p>${element.stats.armor}</p>
    <p>${element.stats.armorperlevel}</p>
    <p>${element.stats.spellblock}</p>
    <p>${element.stats.spellblockperlevel}</p>
    <p>${element.stats.attackrange}</p>
    <p>${element.stats.hpregen}</p>
    <p>${element.stats.hpregenperlevel}</p>
    <p>${element.stats.crit}</p>
    <p>${element.stats.critperlevel}</p>
    <p>${element.stats.attackdamage}</p>
    <p>${element.stats.attackdamageperlevel}</p>
    <p>${element.stats.attackspeedoffset}</p>
    <p>${element.stats.attackspeedperlevel}</p>

    </div>
    </div>`
    prueba.insertAdjacentHTML("beforeend",card);
});
