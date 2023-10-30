import React, { useState } from 'react'
import style from '../style.css'
import BaseTemplate from '../../../Layout/BaseTemplate'
import { EntryiCountList, ReportDurationList, ReportFilter } from '../../../utils/Data'
import Select from 'react-select'
import { ArrowFatLinesRight, ChartBar, Plus, PlusCircle, Printer } from '@phosphor-icons/react'
import ExcelImage from '../../../media/images/excel-icon.png'
import TableIcon from '../../../media/images/table-icon.png'
import GraphIcon from '../../../media/images/graph-icon.png'
import SaleChart from '../SaleChart'
function PurchaseReport() {
    const [productList, setProductList] = useState([
        { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' },
        { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' },
        { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' },
        { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' }
    ])
    const [showChart, setShowChart] = useState(false)
    const [firms , setFirms] = useState([{label:'All Firms', value:'0'},{label:'Master', value:'1'},])
    const [users, setUsers] = useState([{label:'All Users', value:'0'},{label:'Admin', value:'1'},])
    return (
        <BaseTemplate>
        <div className="col-12 row g-0 px-2">
            <div className="row g-0">
                <div className="col-10 row g-0 justify-content-evenly">
                    <div className="col-2">
                        <Select options={ReportDurationList} defaultValue={ReportDurationList[1]} />
                    </div>
                    <div className="col-5 row g-0 align-items-center">
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
                    <div className="col-2">
                        <Select options={firms} defaultValue={firms[0]}/>
                    </div>
                    <div className="col-2">
                        <Select options={users} defaultValue={users[0]}/>
                    </div>
                </div>
                <div className="col-2 row g-0 export-download-icons justify-content-end">
                    <button className='col-2' onClick={() => { setShowChart(prev => !prev) }}>
                        <img src={showChart ? TableIcon : GraphIcon} alt="" className='data-export-excel-icon' />
                    </button>
                    <button className='offset-1 col-2'>
                        <img src={ExcelImage} alt="" className='data-export-excel-icon' />
                    </button>
                    <button className="offset-1  col-2">
                        <Printer fontSize={22} weight='fill' />
                    </button>
                </div>
            </div>
            <div className="card mt-5">
                <div className="card-body">

                    {
                        showChart ? (
                            <>
                            <div className="row g-0  justify-content-end">
                                    <div className="col-2">
                                    <Select options={ReportFilter} defaultValue={ReportFilter[0]}/>
                                    </div>
                                </div>
                            <div className='mt-3'>
                                <SaleChart />
                            </div>
                            </>

                        ) : (
                            <>
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
                                        <PlusCircle weight='fill' fontSize={22} /> Add Purchase
                                    </button>
                                </div>
                                <div className="mt-3">
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
                            </>

                        )
                    }
                </div>
            </div>
        </div>
        </BaseTemplate>
    )
}

export default PurchaseReport