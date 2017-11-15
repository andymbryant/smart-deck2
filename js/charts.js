// const chart1 = document.getElementById('gradChart');
// const chart2 = document.getElementById('enrollChart');
//
// let gradChart = new Chart(chart1, {
//   type: 'bar',
//   data: {
//
//       labels: ["California Average", "SMART Scholars"],
//       datasets: [{
//           data: [78, 100],
//           backgroundColor: [
//               'lightgrey',
//               'lightgreen'
//           ],
//           borderColor: [
//               'grey',
//               'green'
//           ],
//           borderWidth: 1
//       }]
//   },
//   options: {
//     title: {
//       display: true,
//       text: 'High School Graduation Rates',
//       fontSize: 22,
//     },
//     maintainAspectRatio: true,
//     hover: {
//       animationDuration: 100,
//     },
//     legend: {
//       display: false,
//     },
//       scales: {
//           yAxes: [{
//               ticks: {
//                   callback: function(value){return value+ " %"},
//                   beginAtZero:true,
//               }
//           }]
//       }
//   }
// });
//
// let enrollChart = new Chart(chart2, {
//   type: 'bar',
//   data: {
//       labels: ["National Average", "SMART Scholars"],
//       datasets: [{
//           data: [48, 100],
//           backgroundColor: [
//               'lightgrey',
//               'lightgreen'
//           ],
//           borderColor: [
//               'grey',
//               'green'
//           ],
//           borderWidth: 1
//       }]
//   },
//   options: {
//     title: {
//       display: true,
//       text: 'College Enrollment Rates',
//       fontSize: 22,
//     },
//     maintainAspectRatio: true,
//     hover: {
//       animationDuration: 100,
//     },
//     legend: {
//       display: false
//     },
//       scales: {
//           yAxes: [{
//               ticks: {
//                   callback: function(value){return value+ " %"},
//                   beginAtZero:true,
//               }
//           }]
//       }
//   }
// });


var chart1 = document.getElementById("gradChart");
var gradChart = new Chart(chart1, {
    type: 'bar',
    data: {
        // labels: ["78%"],
        datasets: [{
			backgroundColor: 'lightgrey',
            label: 'California Average (78%)',
            data: [78]
            }]
		},
        options: {
            tooltips: {
                enabled: false,
            },
          title: {
            display: true,
            text: 'High School Graduation Rates',
            fontSize: 20,
          },
          maintainAspectRatio: true,
          hover: {
            animationDuration: 100,
          },
          legend: {
            display: true,
          },
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function(value){return value+ " %"},
                        beginAtZero:true,

                    }
                }],
            }
        }
});

function addData1(chart, label, color, data) {
		chart.data.datasets.push({
	    label: label,
      backgroundColor: color,
      data: data
    });
    chart.update();
}

var chart2 = document.getElementById("enrollChart");
var enrollChart = new Chart(chart2, {
    type: 'bar',
    data: {
        datasets: [{
			backgroundColor: 'lightgrey',
            label: 'National Average (48%)',
            data: [48]
            }]
		},
        options: {
            tooltips: {
                enabled: false,
            },
          title: {
            display: true,
            text: 'College Enrollment',
            fontSize: 20,
          },
          maintainAspectRatio: true,
          hover: {
            animationDuration: 100,
          },
          legend: {
            display: true,
          },
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function(value){return value+ " %"},
                        beginAtZero:true,
                    }
                }]
            },
        }
});

function addData2(chart, label, color, data) {
		chart.data.datasets.push({
	    label: label,
      backgroundColor: color,
      data: data
    });
    chart.update();
}

let run1 = 0;
let run2 = 0;

Reveal.addEventListener('grad', function() {
    if (run1===0) {
        Reveal.addEventListener( 'fragmentshown', function( event ) {
    		addData1(gradChart, 'SMART Scholars (100%)', '#34b223', [100]);
    	} );
        run1++;
    }

})

Reveal.addEventListener('enroll', function() {
    if (run2===0) {
        Reveal.addEventListener( 'fragmentshown', function( event ) {
            addData2(enrollChart, 'SMART Scholars (100%)', '#34b223', [100]);
	} );
        run2++;
    }
})
