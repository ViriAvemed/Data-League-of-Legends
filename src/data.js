window.data ={

  debugData: (data) => {
    let newArraydeData = [];
    for(let i in data ){
      let name = data[i]["name"];
      let title = data[i]["title"];
      let info = data[i]["info"];
      let tags = data[i]["tags"];
      let splash = data[i]["splash"];
      let stats = data[i]["stats"];

      newArraydeData.push(
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

    return (newArraydeData);
  },
};



window.data=data;

