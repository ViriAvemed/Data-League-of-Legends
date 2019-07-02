window.data ={

  championSearch: (data) => {
    let cardGeneral = [];
    for(let i in data ){
      let name = data[i]["name"];
      let title = data[i]["title"];
      let info = data[i]["info"];
      let tags = data[i]["tags"];

       cardGeneral.push(
         {
           name,
           title,
           info,
           tags
          }
          );


    }
  
    return (cardGeneral);
} 
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

