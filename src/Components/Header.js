import React from 'react'
import { Navbar,Image } from 'react-bootstrap'
import {data} from './Data'

function Header(props) {
    const { selectMonth, array}=props
   
    const dropdown = array.map((datas) => {
        return <option value={datas} key={datas}>{datas}</option>
    })
    
  
    return (
            <Navbar  expand="lg" className="header-nav">
           
            <select onChange={(event) => selectMonth(event.target.value)} defaultValue={array[0]} >
                {dropdown}
            </select>   

            <Navbar.Brand className="header-text ml-auto">Invoice Dashboard<Image src={require("../Images/verizon_logo1.jpg").default} /></Navbar.Brand>

            </Navbar>
    )
}

export default Header




