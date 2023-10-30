import React, { useState } from 'react'
import BaseTemplate from '../../../Layout/BaseTemplate'
import Select from 'react-select'
import ExcelImage from '../../../media/images/excel-icon.png'
import { Printer } from '@phosphor-icons/react'
import { EntryiCountList } from '../../../utils/Data'
function DayBook() {
    const [firms, setFirms] = useState([{ label: 'All Firms', value: '0' }, { label: 'Master', value: '1' },])
    const [productList, setProductList] = useState([
        { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' },
        { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' },
        { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' },
        { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' }
    ])
    return (
        <BaseTemplate>
            <div className="row g-0">
                <div className="col-10 row g-0">
                    <div className="col-3 row g-0 align-items-center">
                        <div className="col-3">
                            Date
                        </div>
                        <div className="col-5">
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className="col-2">
                        <Select options={firms} defaultValue={firms[0]} />
                    </div>
                </div>


                <div className="col-2 row g-0 export-download-icons justify-content-end">
                    <button className='col-2'>
                        <img src={ExcelImage} alt="" className='data-export-excel-icon' />
                    </button>
                    <button className="offset-1  col-2">
                        <Printer fontSize={22} weight='fill' />
                    </button>
                </div>
            </div>
            <div className="row g-0 mt-5">
                <div className="card">
                    <div className="card-body">
                        <div className="col-12 row g-0 justify-content-between">
                            <div className="col-6 row g-0 align-items-center ">
                                <div className="col-1">
                                    Show
                                </div>
                                <div className="col-2">
                                    <Select options={EntryiCountList} defaultValue={EntryiCountList[0]} />
                                </div>
                                <div className="col-2 text-center">
                                    Entries
                                </div>
                            </div>
                            <div className="col-4 row g-0 align-items-center">
                                <div className="col-2">
                                    Search:
                                </div>
                                <div className="col-8">
                                    <input type="text" className='form-control d-inline' />
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <table className='table stock-table table-bordered table-hover ' id='stockTable'>
                                <thead>
                                    <tr>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            REF No.
                                        </th>
                                        <th>
                                            Type
                                        </th>
                                        <th>
                                            Total
                                        </th>
                                        <th>
                                            Money In
                                        </th>
                                        <th>
                                            Money Out
                                        </th>
                                        <th>
                                            Print / Share
                                        </th>
                                        <th>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        productList.map((row) => {
                                            return <tr>
                                                <td>{row.name}</td>
                                                <td>{row.stock}</td>
                                                <td>{row.purchaseRate}</td>
                                                <td>{row.saleRate}</td>
                                                <td>{row.discount}</td>
                                                <td>{row.barcode}</td>
                                                <td>{row.hsn}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-5 row g-0">
                              <div className="col-4 money-in-container">
                                Total Money In : $2323
                              </div>
                              <div className="col-4 money-out-container">
                              Total Money Out : $2323
                              </div>
                              <div className="col-4 money-in-container">
                              Total Money In - Total Money Out : $232
                              </div>
                        </div>
                    </div>
                </div>
            </div>

        </BaseTemplate>
    )
}

export default DayBook