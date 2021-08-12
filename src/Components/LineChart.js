import React, { useEffect } from 'react'
import { Chart } from 'chart.js'

let lineChart;

function LineChart(props) {
    console.log(props.lineChart);
    const { lineChartCurrent, lineChartPrev } = props.lineChart
    console.log(lineChartPrev[0].Date);
    useEffect(() => {
        if (lineChart) {
            lineChart.destroy()
        }
        const firstChart = (previousdate, currentdate, prevSuccess, currentSuccess,prevFail,currentFail) => {
            var ctx = document.getElementById("lineChart").getContext('2d');
            lineChart = new Chart(ctx, {

                type: "line",
                data: {
                    labels: [previousdate, currentdate],
                    datasets: [{
                        label: 'Success Count',
                        data: [prevSuccess, currentSuccess],
                        backgroundColor: [
                            "green"
                        ],
                        borderColor: [
                            "green"
                        ],
                        borderWidth: 1
                    },
                    {
                        label: 'Failure Count',
                        data: [prevFail, currentFail],
                        backgroundColor: [
                            "red"
                        ],
                        borderColor: [
                            "red"
                        ],
                        borderWidth: 1
                    }
                    ]
                },
                options: {
                    fill: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }

            }
            );
        }


        firstChart(lineChartPrev[0].Date, 
                    lineChartCurrent[0].Date, 
                    lineChartPrev[0].success,
                     lineChartCurrent[0].success,
                     lineChartCurrent[0].failure,
                     lineChartPrev[0].failure)
    }, [lineChartCurrent, lineChartPrev])

    return (
        <div className="chart-container">
            <p>Success And Failure Count</p>
            <canvas id="lineChart" className="canvasStyle"></canvas>
        </div>
    )
}

export default LineChart
