const select = document.querySelector("#filter")
let age = document.querySelector(".filterByAge")

const defaultGraph1 = document.querySelector("#defaultGraph1")
const defaultBigNumber = document.querySelector("#defaultBigNumber")
// for pie chart
const defaultPieChart = document.querySelector("#defaultPieChart")
// Add More Graph Add new const
function selectFilter() {
  select.addEventListener("change", () => {
    if (select.value === "age") age.classList.remove("hidden")
    if (select.value !== "age") age.classList.add("hidden")
  })
}

function fetch1(ageValue) {
  return $.ajax({
    url: "https://dev4.bankbuddy.me/charts/filter/",
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
    defaultGraph1.innerHTML= ""
    defaultBigNumber.innerHTML = ""
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
    let traceGraph1 = {
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
    let layoutGraph1 = {
      font: {size: 12},
      title: 'Merchant v/s age',
      xaxis: {title: 'Merchant'},
      yaxis: {title: 'Age'}
    };

    let dataBigNumber = [
      {
        type: "indicator",
        mode: "number",
        value: D.length,
        domain: {x: [0, 1], y: [0, 1]}
      }
    ];

    let layoutBigNumber = {
      paper_bgcolor: "lightgray",
      width: 600,
      height: 200,
      margin: { t: 0, b: 0, l: 10, r: 10 },
    };

    // defining data and layout for pie chart

    var dataPieChart = [{
      type: "pie",
      values: y2,
      labels: yl,
      textinfo: "label+percent",
      textposition: "outside",
      automargin: true
    }];
    
    var layoutPieChart = {
      height: 600,
      width: 600,
      showlegend: false
      };

    let configGraph1 = {responsive: true};
    Plotly.newPlot(document.getElementById('graph1'), [traceGraph1], layoutGraph1, configGraph1);
    Plotly.newPlot(document.getElementById('big_number'), dataBigNumber, layoutBigNumber);
    Plotly.newPlot(document.getElementById('pie_chart'), dataPieChart, layoutPieChart);
    xl = [];
    yl = [];
    x2 = [];
    y2 = [];
  })
})


async function myFunc() {
  await fetch1("70").then(res => {
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
    let dataBigNumber = [
      {
        type: "indicator",
        mode: "number",
        value: D.length,
        domain: {x: [0, 1], y: [0, 1]}
      }
    ];

    let layoutBigNumber = {
      paper_bgcolor: "lightgray",
      width: 600,
      height: 200,
      margin: { t: 0, b: 0, l: 10, r: 10 },
    };

    // defining data and layout for pie chart

    var dataPieChart = [{
      type: "pie",
      values: y2,
      labels: yl,
      textinfo: "label+percent",
      textposition: "outside",
      automargin: true
    }];
    
    var layoutPieChart = {
      height: 600,
      width: 600,
      showlegend: false
      };

    let config = {responsive: true};
    Plotly.newPlot(document.querySelector('#defaultGraph1'), [trace1], layout, config);
    Plotly.newPlot(document.querySelector('#defaultBigNumber'), dataBigNumber, layoutBigNumber);
    Plotly.newPlot(document.querySelector('#defaultPieChart'), dataPieChart, layoutPieChart);
  })
}

window.addEventListener("load", myFunc)
