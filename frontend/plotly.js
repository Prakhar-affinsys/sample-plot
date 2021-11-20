
let xl = [];
let yl = [];
let x2 = [];
let y2 = [];
let D=[];


async function fetch1(){
  let x= await $.ajax({
    url: "https://dev1.bankbuddy.me/charts/filter/",
      type:"GET",
      headers:{
          "Content-type":"application/json"
      },
  });
  return x;
}

async function myFunc() {

  fetch1().then(res=>{
    console.log(res);
    D=res;
    for (let i = 0; i < D.length; i++) {
      xl.push(D.id)
      yl.push(D.name)
      x2.push(D.age)
      y2.push(D.number)
    }
    let trace1 = {
      x: x2,
      y: yl,
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

myFunc();
