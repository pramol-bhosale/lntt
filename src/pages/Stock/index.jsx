import React, { useState } from 'react'
import style from './style.css'
import { ChartDonut, MagnifyingGlass, Printer, Table } from '@phosphor-icons/react'
import BaseTemplate from '../../Layout/BaseTemplate'
import PopUp from '../../components/Modal'
import { TABLE_LAYOUT_POPUP_CODE } from '../../utils/Constants'
function StockPage() {
    const [productList, setProductList] = useState([
        {name:'T-Shirt', stock:'20', purchaseRate:'350', saleRate:'450',discount:'5',barcode:'185647834', hsn:'HSN0973'},
        {name:'T-Shirt', stock:'20', purchaseRate:'350', saleRate:'450',discount:'5',barcode:'185647834', hsn:'HSN0973'},
        {name:'T-Shirt', stock:'20', purchaseRate:'350', saleRate:'450',discount:'5',barcode:'185647834', hsn:'HSN0973'},
        {name:'T-Shirt', stock:'20', purchaseRate:'350', saleRate:'450',discount:'5',barcode:'185647834', hsn:'HSN0973'}
    ])
    const [popupCode, setPopupCode] = useState(TABLE_LAYOUT_POPUP_CODE)
    return (
        <BaseTemplate>
        <>
        <PopUp code={popupCode}/>
        <div className="row g-0">
            <div className="col-12 align-items-center">
                <div className="col-12 row g-0 align-items-center justify-content-between">
                    <div className="col-1 row g-0 align-items-center">
                        <div className="col-6">
                            <ChartDonut size={32} weight="fill" />
                        </div>
                        <span className='stock-label col-6'>
                            Stock
                        </span>
                    </div>
                    <div className="col-2 text-end">
                        <button className='app-btn d-inline' data-bs-toggle={`${popupCode ? 'modal' : ''}`} data-bs-target="#confirmModal" onClick={(e)=>{setPopupCode(TABLE_LAYOUT_POPUP_CODE);}}>
                        <Table size={32} weight="fill"/>
                        </button>   
                        <button className="app-btn d-inline ms-2">
                        <Printer size={22} weight="fill" /> Print
                        </button>
                    </div>
                </div>
                <div className="col-12 mt-4 row g-0 align-items-center justify-content-end">
                    <div className="col-3">
                        <div className="form-floating">
                            <input type="text" id='productName' className='form-control' placeholder='search' />
                            <label htmlFor="productName">Search</label>
                        </div>
                    </div>
                    <div className="ms-2 col-2">
                        <button className="app-btn">
                            <MagnifyingGlass size={32} weight="bold" />   Search
                        </button>
                    </div>
                </div>
                <div className="col-12 mt-4 row g-0">
                    <table className='table stock-table border'>
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
                                productList.map((row)=>{
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
        </>
        </BaseTemplate>
    )
}

export default StockPage