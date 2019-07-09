window.data ={
<<<<<<< HEAD
  debugData: (data) => {
<<<<<<< HEAD
    let newArrayData = [];
=======
    let newArraydeData = [];

>>>>>>> 2d689e064d82268a1a11fd3f5d0531d4d3b94341
=======
// Función que depura la data y solo hace el llamado de la data solicitada
  championSearch: (data) => {
    let cardGeneral = [];
>>>>>>> d90750f4296d06fd7e6c54349baeabade93b697d
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

<<<<<<< HEAD
      newArrayData.push(
        {
          name,
          title,
          info,
          tags,
          splash,
          stats
=======
    }
  
    return (cardGeneral);
}, 
>>>>>>> d90750f4296d06fd7e6c54349baeabade93b697d



<<<<<<< HEAD
    return (newArrayData);
  },
=======
>>>>>>> d90750f4296d06fd7e6c54349baeabade93b697d
};

window.data=data;

