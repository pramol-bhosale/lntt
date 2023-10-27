import { ArrowClockwise, Cube, FloppyDisk, Trash } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import PopUp from '../../components/Modal'
import { DELETE_SUPPLIER_POPUP_CODE, RESET_FORM_POPUP_CODE, UPDATE_RECORD_POPUP_CODE } from '../../utils/Constants'
import { ProductUnitList } from '../../utils/Data'

function AddProduct({ isUpdate }) {
    const GSTList = [
        { label: '5%', value: '5' },
        { label: '10%', value: '10' },
        { label: '15%', value: '15' }
    ]
    const GSTextraList = [
        { label: 'Yes', value: true },
        { label: 'No', value: false }
    ]
    const [mainLabel, setMainLabel] = useState(isUpdate);
    const [popupCode, setPopupCode] = useState(RESET_FORM_POPUP_CODE)
    useEffect(() => {
        setMainLabel(isUpdate)
    }, [isUpdate])
    return (
        <>
            <PopUp code={popupCode} />
            <div className="row g-0">
                <div className="col-12 align-items-center">
                    <Cube size={30} weight="fill" /> <span className='addproduct-main-heading'>
                        {
                            mainLabel ? 'Update Product' : 'Add Product'
                        }

                    </span>
                    <div className="col-12 row g-0 bg-white p-4 my-4 rounded-2 portal-shadow-container">
                    <div className="col-12 row g-0 mt-4">
                        <div className="col-3">
                            <div className='form-label'>
                                Product Name*
                            </div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="offset-1 col-3">
                            <div className='form-label'>
                                Unit
                            </div>
                            <Select
                                options={ProductUnitList}
                            />
                        </div>
                        <div className="offset-1 col-3">
                            <div className='form-label'>
                                HSN
                            </div>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12 row g-0 mt-4">
                        <div className="col-3">
                            <div className='form-label'>
                                Purchase Rate*
                            </div>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="offset-1 col-3">
                            <div className='form-label'>
                                M.R.P
                            </div>
                            <input type="number" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12 row g-0 mt-4 align-items-baseline">
                        <div className="col-3">
                            <div className='form-label'>
                                Margin %
                            </div>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="offset-1 col-3">
                            <div className='form-label'>
                                Sale Rate*
                            </div>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="offset-1 col-3">
                            <fieldset class="border p-2 rounded-2 px-3 pb-3">
                                <legend class="float-none w-auto p-2 addproduct-legend">Wholesale</legend>
                                <div className="row g-0">
                                    <div className="col-5">
                                        <div className='form-label'>
                                            Margin %
                                        </div>
                                        <input type="number" className="form-control" />
                                    </div>
                                    <div className="offset-1 col-5">
                                        <div className='form-label'>
                                            Rate
                                        </div>
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className="col-12 row g-0 mt-4">
                        <div className="col-3">
                            <div className='form-label'>
                                Stock
                            </div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="offset-1 col-3">
                            <div className='form-label'>
                                Minimum Stock
                            </div>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="offset-1 col-3">
                            <div className='form-label'>
                                Discount %
                            </div>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12 row g-0 mt-4">
                        <div className="col-3">
                            <div className='form-label'>
                                Select GST
                            </div>
                            <Select
                                options={GSTList}
                                menuPlacement='top'
                            />
                        </div>
                        <div className="offset-1 col-3">
                            <div className="form-label">
                                Is GST included in Rate ?
                            </div>
                            <Select
                                options={GSTextraList}
                                menuPlacement='top'
                            />
                        </div>
                    </div>
                    <div className="col-12 row g-0 mt-5 justify-content-end">
                        <div className="col-7 row g-0 justify-content-end">
                            <div className="col-2 align-self-center btn btn-outline-danger" data-bs-toggle={`${popupCode ? 'modal' : ''}`} data-bs-target="#confirmModal" onClick={() => { setPopupCode(RESET_FORM_POPUP_CODE) }}>
                                <ArrowClockwise size={25} /> Reset
                            </div>
                            {
                                isUpdate ? (
                                    <div className="offset-1 col-2 btn btn-danger" data-bs-toggle={`${popupCode ? 'modal' : ''}`} data-bs-target="#confirmModal" onClick={() => { setPopupCode(DELETE_SUPPLIER_POPUP_CODE) }}>
                                        <Trash size={25} weight="fill" /> Delete
                                    </div>
                                ) : null
                            }
                            <div className="col-2 offset-1 btn btn-primary" data-bs-toggle={`${popupCode ? 'modal' : ''}`} data-bs-target="#confirmModal" onClick={() => { setPopupCode(UPDATE_RECORD_POPUP_CODE) }}>
                                <FloppyDisk size={25} weight="fill" /> Save
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct