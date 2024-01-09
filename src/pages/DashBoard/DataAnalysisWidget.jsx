import { CaretCircleLeft, CaretCircleRight, CurrencyInr } from '@phosphor-icons/react'
import React from 'react'
import TopProduct from './TopProduct'

function DataAnalysisWidget() {
    return (
        <div className="row g-0">
            <div className="col-12 stock-value-container px-3  py-2 rounded-3">
                <div>Available Stock Value</div>
                <strong><CurrencyInr /> 4,56,565</strong>
            </div>
            <div className="col-12 low-stock-container mt-4 px-3 py-2 rounded-3">
                <div>Low Stocks</div>
                <LowStockTable />
            </div>
            <div className="col-12">
             <TopProduct/>
            </div>
        </div>
    )
}

export default DataAnalysisWidget

const LowStockTable = () => {
    return (
        <>
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
            </tbody>
        </table>
        <div className='row g-0 DAW_pagination'>
                <div className="col-6">
                    Showing Page 1 of 10
                </div>
                <div className="col-6 row g-0 justicy-content-end">
                <button className='col-4'>
                <CaretCircleLeft size={25} weight="light" />
                </button>
                <input type="number" min={0} className='col-4' />
                <button className='col-4'>
                <CaretCircleRight size={25} weight="light" />
                </button>
                </div>
            </div>
        </>
    )
}
