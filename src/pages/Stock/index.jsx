import React, { useState } from 'react'
import style from './style.css'
import { ChartDonut, MagnifyingGlass, Printer, Table } from '@phosphor-icons/react'
import BaseTemplate from '../../Layout/BaseTemplate'
import PopUp from '../../components/Modal'
import { TABLE_LAYOUT_POPUP_CODE } from '../../utils/Constants'
function StockPage() {
    const [productList, setProductList] = useState([
        { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' },
        { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' },
        { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' },
        { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' }
    ])
    const [popupCode, setPopupCode] = useState(TABLE_LAYOUT_POPUP_CODE)
    return (
        <BaseTemplate>
            <>
                <PopUp code={popupCode} />
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
                                <button className='app-btn d-inline' data-bs-toggle={`${popupCode ? 'modal' : ''}`} data-bs-target="#confirmModal" onClick={(e) => { setPopupCode(TABLE_LAYOUT_POPUP_CODE); }}>
                                    <Table size={32} weight="fill" />
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
                            <div class="table-responsive">
                                <table class="table table-editable table-nowrap align-middle table-edits">
                                    <thead>
                                        <tr style="cursor: pointer;">
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>Gender</th>
                                            <th>Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr data-id="1" style="cursor: pointer;">
                                            <td data-field="id" style="width: 80px">1</td>
                                            <td data-field="name">David McHenry</td>
                                            <td data-field="age">24</td>
                                            <td data-field="gender">Male</td>
                                            <td style="width: 100px">
                                                <a class="btn btn-outline-secondary btn-sm edit" title="Edit">
                                                    <i class="fas fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr data-id="2" style="cursor: pointer;">
                                            <td data-field="id">2</td>
                                            <td data-field="name">Frank Kirk</td>
                                            <td data-field="age">22</td>
                                            <td data-field="gender">Male</td>
                                            <td>
                                                <a class="btn btn-outline-secondary btn-sm edit" title="Edit">
                                                    <i class="fas fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr data-id="3" style="cursor: pointer;">
                                            <td data-field="id" style="width: 80px;"><input type="text" fdprocessedid="yh3h9"/></td>
                                            <td data-field="name" style="width: 440.65px;"><input type="text" fdprocessedid="zgakl5"/></td>
                                            <td data-field="age" style="width: 179.425px;"><input type="text" fdprocessedid="8sv638"/></td>
                                            <td data-field="gender" style="width: 242.15px;"><select fdprocessedid="4l3r9q"><option>Male</option><option>Female</option></select></td>
                                            <td>
                                                <a class="btn btn-outline-secondary btn-sm edit" title="Edit">
                                                    <i class="fas fa-save" title="Save"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr data-id="4" style="cursor: pointer;">
                                            <td data-field="id">4</td>
                                            <td data-field="name">Mark Ellison</td>
                                            <td data-field="age">32</td>
                                            <td data-field="gender">Male</td>
                                            <td>
                                                <a class="btn btn-outline-secondary btn-sm edit" title="Edit">
                                                    <i class="fas fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr data-id="5" style="cursor: pointer;">
                                            <td data-field="id">5</td>
                                            <td data-field="name">Minnie Walter</td>
                                            <td data-field="age">27</td>
                                            <td data-field="gender">Female</td>
                                            <td>
                                                <a class="btn btn-outline-secondary btn-sm edit" title="Edit">
                                                    <i class="fas fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </BaseTemplate>
    )
}

export default StockPage