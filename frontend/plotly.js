
let xl = [];
let yl = [];
let x2 = [];
let y2 = [];
let D=[];

// for filter function bar graph
async function fetch1(){
  let x= await $.ajax({
    url: "https://dev1.bankbuddy.me/charts/filter/",
    type:"POST",
    headers:{
        "Content-type":"application/json"
    },
    contentType: false,
    processData: false,
    data: JSON.stringify({
      "age": 70
    }),
    success: function(res){
      console.log(res)
    }
});
  return x;
}

async function myFunc() {

  fetch1().then(res=>{
    console.log(res);
    D=res;
    for (let i = 0; i < D.length; i++) {
      xl.push(D[i]['id'])
      yl.push(D[i]['name'])
      x2.push(D[i]['age'])
      y2.push(D[i]['number'])
    }
    let trace1 = {
      x: yl,
      y: x2,
      type: 'bar',
      marker: {
        color: '#C8A2C8',
        line: {
            width: 2
        }
    }
    };
    var layout = {font: {size: 12}};
    var config = {responsive: true};
    TESTER = document.getElementById('graph1');
    Plotly.newPlot(TESTER, [trace1], layout, config);

  })

}
// for filter function big number graph
async function fetch2(){
  let x= await $.ajax({
    url: "https://dev1.bankbuddy.me/charts/filter/1",
    type:"POST",
    headers:{
        "Content-type":"application/json"
    },
    contentType: false,
    processData: false,
    data: JSON.stringify({
      "age": 70
    }),
    success: function(res){
      console.log(res)
    }
});
  return x;
}
async function myFunc1() {

  fetch1().then(res=>{
    console.log(res);
    D=res;
    console.log(D)
    for (let i = 0; i < D.length; i++) {
      xl.push(D[i]['id'])
      yl.push(D[i]['name'])
      x2.push(D[i]['age'])
      y2.push(D[i]['number'])
    }
var data = [
  {
      type: "indicator",
      mode: "number",
      value: 400,
      domain: { x: [0, 1], y: [0, 1] }
  }
  ];

  var layout = {
  paper_bgcolor: "lightgray",
  width: 600,
  height: 200,
  margin: { t: 0, b: 0, l: 0, r: 0 }
  };

  Plotly.newPlot('big_number', data, layout);
})

}

myFunc();
myFunc1();
