import React, { useState } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

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
            <LineChart
            data={data}
            >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="date"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Line dataKey="sale" stroke='#45496E' type="monotone"/>
            <Line dataKey="purchase" stroke='#FFA500' type="monotone"/>
            </LineChart>
        </ResponsiveContainer>
  )
}

export default Chart