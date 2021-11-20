const select = document.querySelector("#filter")
let age = document.querySelector(".filterByAge")

function selectFilter() {
  select.addEventListener("change", () => {
    if (select.value === "age") age.classList.remove("hidden")
    if (select.value !== "age") age.classList.add("hidden")
  })
}

function fetch1(ageValue) {
  return $.ajax({
    url: "https://dev1.bankbuddy.me/charts/filter/",
    type: "POST",
    headers: {
      "Content-type": "application/json"
    },
    contentType: false,
    processData: false,
    data: JSON.stringify({
      "age": ageValue
    }),
    success: function (res) {
      console.log(res)
    }
  });
}
selectFilter()
document.querySelector("#submit").addEventListener("click", async function () {
  let age = $("#filterByAge").val()
  console.log(age)
  await fetch1(age).then(res => {
    let D = res;
    let xl = [];
    let yl = [];
    let x2 = [];
    let y2 = [];
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
    let layout = {
      font: {size: 12},
      title: 'Merchant v/s age',
      xaxis: {title: 'Merchant'},
      yaxis: {title: 'Age'}
    };
    let config = {responsive: true};
    Plotly.newPlot(document.getElementById('graph1'), [trace1], layout, config);
    xl = [];
    yl = [];
    x2 = [];
    y2 = [];
  })
})

// for filter function bar graph

// async function myFunc() {
//
//   fetch1().then(res=>{
//     console.log(res);
//     D=res;
//     for (let i = 0; i < D.length; i++) {
//       xl.push(D[i]['id'])
//       yl.push(D[i]['name'])
//       x2.push(D[i]['age'])
//       y2.push(D[i]['number'])
//     }
//     let trace1 = {
//       x: yl,
//       y: x2,
//       type: 'bar',
//       marker: {
//         color: '#C8A2C8',
//         line: {
//             width: 2
//         }
//     }
//     };
//     var layout = {
//     font: {size: 12}, 
//     title: 'Merchant v/s age',
//     xaxis: {title: 'Merchant'},
//     yaxis: {title: 'Age'}
//     };
//     var config = {responsive: true};
//     TESTER = document.getElementById('graph1');
//     Plotly.newPlot(TESTER, [trace1], layout, config);
//
//   })
// }

// async function myFunc1() {
//   fetch1().then(res=>{
//     console.log(res);
//     D=res;
//     for (let i = 0; i < D.length; i++) {
//       xl.push(D[i]['id'])
//       yl.push(D[i]['name'])
//       x2.push(D[i]['age'])
//       y2.push(D[i]['number'])
//       count++;
//     }
// var data = [
//   {
//       type: "indicator",
//       mode: "number",
//       value: count,
//       domain: { x: [0, 1], y: [0, 1] }
//   }
//   ];
//
//   var layout = {
//   paper_bgcolor: "lightgray",
//   width: 600,
//   height: 200,
//   margin: { t: 0, b: 0, l: 10, r: 10 },
//   };
//
//   Plotly.newPlot('big_number', data, layout);
//
//   })
// }
// myFunc1();
