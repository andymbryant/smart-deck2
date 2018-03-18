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
            fontSize: 45,
          },
          maintainAspectRatio: true,
          hover: {
            animationDuration: 0,
          },
          legend: {
            position: 'bottom',
            display: true,
          },
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function(value){return value+ " %"},
                        beginAtZero:true,
                        fontSize: 20,

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
            fontSize: 45,
          },
          maintainAspectRatio: true,
          hover: {
            animationDuration: 100,
          },
          legend: {
            position: 'bottom',
            display: true,
          },
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function(value){return value+ " %"},
                        beginAtZero:true,
                        fontSize: 20,
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
        Reveal.addEventListener( 'fragmentshown', function( event ) {
            if (run1===0) {
    		addData1(gradChart, 'SMART Scholars (100%)', '#34b223', [100]);
            run1++;
            console.log(run1);
            }
    	} );
    });


Reveal.addEventListener('enroll', function() {
        Reveal.addEventListener( 'fragmentshown', function( event ) {
            if (run2===0) {
            addData2(enrollChart, 'SMART Scholars (100%)', '#34b223', [100]);
            run2++;
            }
	    });
    });

Reveal.addEventListener('slide1', function() {
	Reveal.addEventListener( 'fragmentshown', function( event ) {
		document.getElementById("opacity").classList.add('opacity-applied');
	} );
})
