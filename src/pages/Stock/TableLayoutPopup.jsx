import React from 'react'
import { StockTableColumns } from '../../utils/Data'

function TableLayoutPopup() {
    return (
        <div className='row g-0'>
            <div className="col-12 my-3">
                Customize the table view by choosing which columns you want to display. Simply select the columns you'd like to see below.
            </div>
            <div className="col-12 stock-table-popup-container">
                <table className="table app-table">
                    <thead>
                        <tr>
                            <th>
                                Columns
                            </th>
                            <th>
                                Show
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            StockTableColumns.map(elem=>{
                                return (
                                    <tr>
                                        <td>{elem.label}</td>
                                        <td><input type='checkbox' className='form-check-input'/></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableLayoutPopup