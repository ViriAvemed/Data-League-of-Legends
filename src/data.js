window.data ={

  championSearch: (data) => {
    let cardGeneral = [];
    for(let i in data ){
      let name = data[i]["name"];
      let title = data[i]["title"];
      let info = data[i]["info"];
      let tags = data[i]["tags"];
      let splash = data[i]["splash"];
      let stats = data[i]["stats"];
        
       cardGeneral.push(
         {
           name,
           title,
           info,
           tags,
           splash,
           stats

          }
          );

    }
  
    return (cardGeneral);
} 
};


Object.filter = function( obj, predicate) {
  var result = {}, key;
  // ---------------^---- as noted by @CMS, 
  //      always declare variables with the "var" keyword

  for (key in obj) {
      if (obj.hasOwnProperty(key) && !predicate(obj[key])) {
          result[key] = obj[key];
      }
  }

  return result;
};

window.data=data;

// Esta función permite obtener el nombre de todos los campeones
// championSearch: (data,id,title) => {
// const lolData=data;
// let championsId = Object.keys (lolData);
// // console.log (championsId)
// for (let i=0; i<championsId.length; i++){
//   if (championsId[i].id===id){
//     result=championsId[i]
//     console.log (result);
//   }
// }
// }

