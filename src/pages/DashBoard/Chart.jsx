import React, { useState } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function Chart() {
    const [data, setData] = useState([
        {
            date:'1/10',
            sale: 403,
            purchase: 100,
        },
        {
            date:'2/10',
            sale: 503,
            purchase: 200,
        },
        {
            date:'3/10',
            sale: 603,
            purchase: 100,
        },
        {
            date:'4/10',
            sale: 203,
            purchase: 500,
        },
        {
            date:'5/10',
            sale: 103,
            purchase: 0,
        },
        {
            date:'6/10',
            sale: 790,
            purchase: 200,
        }
    ])
  return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
            data={data}
            >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="date"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Bar dataKey="sale" fill='#82ca9d'/>
            <Bar dataKey="purchase" fill='#8884d8'/>
            </BarChart>
        </ResponsiveContainer>
  )
}

export default Chart