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

        }
      );

    }

    return (newarrayData);
  },



};

window.data=data;
