import React from 'react'

function CustTable(props) {
    const { custData, children } = props
    const table = custData.map((data) => {
        return <div key={data.name}>
            <p>{data.name}</p>
            <p>{data.custData}</p>
        </div>
    })
    console.log(custData);
    return (
        <div className="customer-table">
            <div>
                {children}
            </div>
            <div>
                {table}
            </div>
        </div>
    )
}

export default CustTable
