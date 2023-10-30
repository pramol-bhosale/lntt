import React, { useEffect, useState } from 'react'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

function SaleChart() {
  const [dimensions, setDimensions] = useState();
  useEffect(()=>{
     let width = window.screen.availWidth
     let height = window.screen.availHeight
    width = width * 0.7
    height = height * 0.5
    setDimensions({
      height, width
    })
  },[])
  const saleData = [
    {
      date:'1/10/2023',
      Amount:2300
    },
    {
      date:'2/10/2023',
      Amount:5400
    },
    {
      date:'3/10/2023',
      Amount:1300
    },
    {
      date:'4/10/2023',
      Amount:4400
    }
  ]
  return (
    <div>
    {
      dimensions ? (
        <AreaChart data={saleData} width={dimensions.width} height={dimensions.height}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="date"/>
        <YAxis dataKey="Amount"/>
        <Tooltip/>      
        <Area type="monotone" dataKey="Amount" stroke="#30B00E" fill="#30B00E" />
       </AreaChart>
      ):null
    }
    </div>
  )
}

export default SaleChart