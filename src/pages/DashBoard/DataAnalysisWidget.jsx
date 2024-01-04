import { CurrencyInr } from '@phosphor-icons/react'
import React from 'react'

function DataAnalysisWidget() {
  return (
    <div className="row g-0">
        <div className="col-12 stock-value-container px-3  py-2 rounded-1">
            <div>Available Stock Value</div>
            <strong><CurrencyInr/> 4,56,565</strong>
        </div>
        <div className="col-12 low-stock-container mt-4 px-3 py-2 rounded-1">
            <div>Low Stocks</div>
                <LowStockTable/>
        </div>
    </div>
  )
}

export default DataAnalysisWidget

const LowStockTable = ()=>{
    return(
        <table className='table table-bordered  mt-2'>
            <thead>
                <th>
                    Name
                </th>
                <th>
                    Quantity
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>T-Shirt</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>T-Shirt</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>T-Shirt</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>T-Shirt</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>T-Shirt</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>T-Shirt</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>T-Shirt</td>
                    <td>10</td>
                </tr>
            </tbody>
        </table>
    )
}
