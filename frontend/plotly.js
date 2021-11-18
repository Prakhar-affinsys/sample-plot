
let xl = [];
let yl = [];
let x2 = [];
let y2 = [];
let D=[];

// async function getData() {
//   let url = "http://127.0.0.1:8000/filter/";
//   try {
//     let resp = await fetch(url);
//     return await resp.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

function fetch(){
  $.ajax({
      url: "http://127.0.0.1:8000/filter/",
      type:"GET",
      headers:{
          "Content-type":"application/json"
      },
      success: function(data){
          q = $("<li>"+JSON.stringify(data)+"</li>")
          D=data;
          console.log(D);
      }
  });
}

//do whatever you want with the data response
// async function myFunc() {
//   let data = await getData();
//   console.log(data[0])

//   for (let i = 0; i < data.length; i++) {
//     xl.push(data[i].id)
//     yl.push(data[i].Name)
//     x2.push(data[i].age)
//     y2.push(data[i].number)
//   }
//   let trace1 = {
//     x: x2,
//     y: yl,
//     type: 'bar'
//   };
//   var layout = {font: {size: 18}};
//   var config = {responsive: true};
//   TESTER = document.getElementById('graph1');
//   Plotly.newPlot(TESTER, [trace1], layout, config);

  //Plotly.plot(document.getElementById("graph1"), [trace1]);

// }

// myFunc();

fetch();
