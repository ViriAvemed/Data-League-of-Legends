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
},



window.data=data;

