
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

    var a = D.id;
    var b = D.Name;
    var c = D.age;
    var d = D.number;

    var finalAra = [];
    for(var i=0;i<a.length;i++){
      var temp = [];
      temp.push(a[i]);temp.push(b[i]);temp.push(c[i]);temp.push(d[i])
      finalAra.push(temp);
    }
    console.log(finalAra);
    for (let i = 0; i < finalAra.length; i++) {
      xl.push(finalAra[0])
      yl.push(finalAra[1])
      x2.push(finalAra[2])
      y2.push(finalAra[3])
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

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "age": 90
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://dev1.bankbuddy.me/charts/filter/", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

