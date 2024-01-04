import { CurrencyInr, NewspaperClipping, TrendDown, TrendUp } from '@phosphor-icons/react'
import React from 'react'
import { Area, AreaChart, Tooltip } from 'recharts'

function SaleMiniWidget() {
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
        <div className='row g-0 border border-3 rounded-4 p-3 miniWidget-container '>
            <div className="col-12 row g-0 justify-content-between">
                <div className="col-8">
                    <NewspaperClipping size={25} weight="fill" /> Total Sale
                </div>
                <div className="col-2  rounded-3 SMW_percentage-container-green text-center border">
                    <span className='SMW_percentage-green'>45%</span> <TrendUp size={14} weight="fill" />
                    {/* <span className='SMW_percentage'>45%</span> <TrendDown size={14} weight="fill" /> */}
                </div>
            </div>
            <div className="col-12 SMW_money-container-green my-3">
                <CurrencyInr size={24} weight="fill" /> 4,33,444
            </div>
            <div className="col-12 row g-0 justify-content-between">
                <div className="col-7">
                    Total Sale Quantity - 145
                </div>
                <div className="col-auto">
                    <AreaChart data={saleData} width={100} height={30}>
                        <Area type="monotone" dataKey="Amount" stroke="#0B803A" fill="#0B803A" />
                    </AreaChart>
                </div>
            </div>
        </div>
    )
}

export default SaleMiniWidget