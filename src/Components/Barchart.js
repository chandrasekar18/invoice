import React, { useEffect } from 'react'
import { Chart } from 'chart.js'
import "chartjs-plugin-datalabels";
let barChart;

function Barchart(props) {
    const { previousdata, currentdata } = props
    useEffect(() => {
        if (barChart) {
            barChart.destroy()
        }
        let previous = previousdata.map(data => { return data.Invoice_amount })
        let current = currentdata.map(data => { return data.Invoice_amount })
        let previousdate = previousdata.map(data => { return data.Date })
        let currentdate = currentdata.map(data => { return data.Date })
        const firstChart = (previousdate, currentdate, previous, current) => {
            var ctx = document.getElementById("barChart").getContext('2d');
            barChart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: [previousdate, currentdate],
                    datasets: [{
                        data: [previous[0], current[0]],
                        backgroundColor: [
                            '#03d7fc',
                            '#4585f5',
                            
                        ],
                        borderColor: [
                            
                        ],
                        barThickness:80,
                        borderWidth: 1
                    }]
                },
                options: {
                    fill: true,
                    
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        datalabels: {
                            color: 'black',
                            align: 'top',
                            anchor: 'center',
                            display: true,
                          labels:
                          {
                              data: [previous[0], current[0]]
                            },
                            font: {
                                weight: 'bold',
                                size:14
                          }
                        },
                        legend: {
                            display:false,
                        }
                        
                    }
                },
                }
            );
        }


        firstChart(previousdate, currentdate, previous, current)
    }, [currentdata, previousdata])
    return (
        <div className="chart-container">
            <p>Overall Invoice Amount</p>
            <canvas id="barChart" className="canvasStyle"></canvas>
        </div>
    )
}

export default Barchart
