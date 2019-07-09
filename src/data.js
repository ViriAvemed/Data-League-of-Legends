window.data ={

  debugData: (data) => {
    let newArrayData = [];
    for(let i in data ){
      let name = data[i]["name"];
      let title = data[i]["title"];
      let info = data[i]["info"];
      let tags = data[i]["tags"];
      let splash = data[i]["splash"];
      let stats = data[i]["stats"];

      newArrayData.push(
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

    return (newArrayData);
  },
};



window.data=data;

