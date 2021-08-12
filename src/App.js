 import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Barchart from './Components/Barchart';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import { useState } from 'react'
import { barChartData, customerData, lineChartData } from './Components/Data'


function App() {

  //filter the distinct date from dataset and stored it in Descending order
  const options = new Set()
  barChartData.map((data1) => {
    options.add(data1.Date)
  })
  const array = Array.from(options);
  array.sort()
  array.reverse()

  //react usestate function
  const [currentMonth, setcurrentMonth] = useState(array[0].toString())

  //filter the current month and previous month data if user select the current 
  const currentdata = barChartData.filter((data) => data.Date === parseInt(currentMonth))
  let previousdata = [];
  if (currentMonth.slice(4, 6) === '01') {
    previousdata = barChartData.filter((data) => data.Date === parseInt(currentMonth) - 89)
  }
  else {
    previousdata = barChartData.filter((data) => data.Date === parseInt(currentMonth) - 1)
  }


  const lineChartCurrent = lineChartData.filter((data) => data.Date === parseInt(currentMonth))
  let lineChartPrev = [];
  if (currentMonth.slice(4, 6) === '01') {
    lineChartPrev = lineChartData.filter((data) => data.Date === parseInt(currentMonth) - 89)
  }
  else {
    lineChartPrev = lineChartData.filter((data) => data.Date === parseInt(currentMonth) - 1)
  }
  const custCurrentData = customerData.filter((data) => data.month === parseInt(currentMonth))

  const custInvoice = custCurrentData.sort((data1, data2) => {
    return data2.invoice - data1.invoice
  })

  const customerInvoice = custInvoice.map((data) => {
    return { name: data.name, custData: data.invoice }
  })

  const custCDR = custCurrentData.sort((data1, data2) => {
    return data2.cdrCount - data1.cdrCount
  })

  const customerCDR = custCDR.map((data) => {
    return { name: data.name, custData: data.cdrCount }
  })

  const lineChart = {
    lineChartCurrent,
    lineChartPrev
  }

  return (
    <div className="App">
      <Header selectMonth={setcurrentMonth} array={array}></Header>
      <Dashboard custInvoice={customerInvoice} custCDR={customerCDR} lineChart={lineChart} previousdata={previousdata} currentdata={currentdata}></Dashboard>
    </div>
  );
}

export default App;
