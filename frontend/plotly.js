
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

async function fetch1(){
  let x= await $.ajax({
    url: "https://dev1.bankbuddy.me/charts/filter/",
      type:"GET",
      headers:{
          "Content-type":"application/json"
      },
      // success: function(data){
      //     q = $("<li>"+JSON.stringify(data)+"</li>")
      //     D=data;
      //     return D;
      // }
  });
  return x;
}


async function myFunc() {
  // let data = await fetch1();
  // console.log(data[0])

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
      type: 'bar'
    };
    var layout = {font: {size: 18}};
    var config = {responsive: true};
    TESTER = document.getElementById('graph1');
    Plotly.newPlot(TESTER, [trace1], layout, config);
  
    Plotly.plot(document.getElementById("graph1"), [trace1],layout,config);

  })

  // for (let i = 0; i < D.length; i++) {
  //   xl.push(D[i].id)
  //   yl.push(D[i].Name)
  //   x2.push(D[i].age)
  //   y2.push(D[i].number)
  // }
  // let trace1 = {
  //   x: x2,
  //   y: yl,
  //   type: 'bar'
  // };
  // var layout = {font: {size: 18}};
  // var config = {responsive: true};
  // TESTER = document.getElementById('graph1');
  // Plotly.newPlot(TESTER, [trace1], layout, config);

  // Plotly.plot(document.getElementById("graph1"), [trace1]);

}

myFunc();

//fetch();
