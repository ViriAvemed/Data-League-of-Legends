window.data ={
// Función que depura la data y solo hace el llamado de la data solicitada
  debugData: (data) => {
    let newarrayData = [];
    for(let i in data ){
      let name = data[i]["name"];
      let title = data[i]["title"];
      let info = data[i]["info"];
      let tags = data[i]["tags"];
      let splash = data[i]["splash"];
      let stats = data[i]["stats"];

      newarrayData.push(
         {
           name,
           title,
           info,
           tags,
           splash,
           stats
          });
    }

    return (newarrayData);
},

orderData: (data, selectedOption) => {

  let ordered = data.sort((a, b) => {
    if(selectedOption === 'A'){
    if (a.name > b.name) {
      return 1;
    }
    }
    else if (selectedOption === 'Z'){
      if (a.name < b.name) {
      return -1;
    }
    }
    return ordered;

});
},

campeonesByName: (valueBySearch,arrayDebug ) => {

  return arrayDebug.filter(function (el) {
  return el.name.toLowerCase().indexOf(valueBySearch) !== -1;
});
},


searchByRol: (chosenValue, arrayDebug) => {
  return arrayDebug.filter(function (el) {
  return el.tags[0].indexOf(chosenValue) !== -1;
});
},

filterByBestChampions: (attributes,arrayDebug) =>{
  return arrayDebug.filter(arrayDebug => arrayDebug.info[attributes] > 9);
},


filterbyletter:(selectedOption, arrayDebug) => {
  return arrayDebug.sort((a, b) => {
  if (selectedOption === "A") {
    return ((a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0));
  } else if (selectedOption === "Z") {
    return ((a.name > b.name) ? -1 : ((a.name < b.name) ? 1 : 0));
  }
});
},

promedio: (chosenValue, arrayDebug) =>{
  let newArrayRol = arrayDebug.filter(function (el) {
    return el.tags[0].indexOf(chosenValue) !== -1;
  });
  let rolAverage =newArrayRol.length*100 /134;
  let promRound= Math.round(rolAverage);
  return (promRound);
},

};
