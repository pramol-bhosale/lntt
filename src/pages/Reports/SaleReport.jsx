import React, { useState } from 'react'
import Select from 'react-select'
import { EntryiCountList, ReportDurationList } from '../../utils/Data'
import { ArrowFatLinesRight, ChartBar, Plus, PlusCircle, Printer } from '@phosphor-icons/react'
import ExcelImage from '../../media/images/excel-icon.png'
function SaleReport() {
    const [productList, setProductList] = useState([
        { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' },
        { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' },
        { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' },
        { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' }
    ])
    return (
        <div className="col-12 row g-0 px-2">
            <div className="row g-0">
                <div className="col-9 row g-0 ">
                    <div className="col-3">
                        <Select options={ReportDurationList} defaultValue={ReportDurationList[1]} />
                    </div>
                    <div className="offset-1 col-7 row g-0 align-items-center">
                        <div className="col-3">
                            BETWEEN
                        </div>
                        <div className="col-4">
                            <input type="date" className='form-control' />
                        </div>
                        <div className="col-1 text-center">
                            TO
                        </div>
                        <div className="col-4">
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                </div>
                <div className="col-3 row g-0 export-download-icons justify-content-end">
                    <button className='col-2'>
                        <ChartBar size={22} weight="fill" />
                    </button>
                    <button className='offset-1 col-2'>
                        <img src={ExcelImage} alt="" className='data-export-excel-icon' />
                    </button>
                    <button className="offset-1  col-2">
                        <Printer fontSize={22} weight='fill' />
                    </button>
                </div>
            </div>
            <div className="card mt-4">
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
                    <div className="text-end mt-3">
                        <button className="btn btn-primary">
                            <PlusCircle weight='fill' fontSize={22} /> Add Sale
                        </button>
                    </div>
                    <div className='mt-3'>
                        <table className='table stock-table table-bordered table-hover ' id='stockTable'>
                            <thead>
                                <tr>
                                    <th>
                                        Product Name
                                    </th>
                                    <th>
                                        Stock
                                    </th>
                                    <th>
                                        Purchase Rate
                                    </th>
                                    <th>
                                        Sale Rate
                                    </th>
                                    <th>
                                        Discount
                                    </th>
                                    <th>
                                        Barcode
                                    </th>
                                    <th>
                                        HSN
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
                </div>
            </div>
        </div>
    )
}

export default SaleReport