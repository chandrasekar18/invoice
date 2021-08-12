import React, { useEffect } from 'react'
import { Chart, registerables } from 'chart.js'
import { data } from './Data';
import Barchart from './Barchart';
import LineChart from './LineChart';
import CustTable from './CustTable';
Chart.register(...registerables);

function Dashboard(props) {
    const { previousdata, currentdata, custInvoice, custCDR ,lineChart} = props
    return (
        <div>
            <div className="main-container">
                <Barchart previousdata={previousdata} currentdata={currentdata}></Barchart>
                <LineChart lineChart={lineChart}></LineChart>
                <div>
                    <canvas id="myChart2" className="canvasStyle"></canvas>
                </div>
                <div>
                    <canvas id="myChart3" className="canvasStyle"></canvas>
                </div>
                <div>
                    <canvas id="myChart4" className="canvasStyle"></canvas>
                </div>
                <div>
                    <canvas id="myChart5" className="canvasStyle"></canvas>
                </div>
                <div>
                    <canvas id="myChart6" className="canvasStyle"></canvas>
                </div>
                <div>
                    <canvas id="myChart6" className="canvasStyle"></canvas>
                </div>
                <div>
                    <CustTable custData={custInvoice}>
                        <p>Top 10 Revenue Customer</p><p> Current Month </p>
                    </CustTable>
                </div>
                <div>
                    <canvas id="myChart6" className="canvasStyle"></canvas>
                </div>
                <div>
                    <canvas id="myChart6" className="canvasStyle"></canvas>
                </div>
                <div>
                    <CustTable custData={custCDR}>
                        <p>Top 10 High Process Customer</p><p>CDR'S Count</p>
                    </CustTable>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
