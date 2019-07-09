window.data ={
  debugData: (data) => {
<<<<<<< HEAD
    let newArrayData = [];
=======
    let newArraydeData = [];

>>>>>>> 2d689e064d82268a1a11fd3f5d0531d4d3b94341
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

