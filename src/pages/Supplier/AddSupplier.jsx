import { ArrowClockwise, Broadcast, Cube, FloppyDisk, Trash, Truck } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { DELETE_SUPPLIER_POPUP_CODE, RESET_FORM_POPUP_CODE, UPDATE_RECORD_POPUP_CODE, stateList } from '../../utils/Constants';
import style from './style.css';
import PopUp from '../../components/Modal';
import { SupplierType } from '../../utils/Data';

function AddSupplier({ isUpdate = true }) {
    const [mainLabel, setMainLabel] = useState(isUpdate);
    const [popupCode, setPopupCode] = useState()
    const [supplierData, setSupplierData] = useState({
        name: 'Adidas',
        accountStatus: true
    });
    useEffect(() => {
        setMainLabel(isUpdate)
    }, [isUpdate])
    return (
        <>
            <PopUp code={popupCode} />
            <div className="row g-0">
                <div className="col-12 align-items-center">
                    <Truck size={30} weight="fill" /> <span className='addSupplier-main-heading'>
                        {
                            mainLabel ? 'Update Supplier Information' : 'Add Supplier Information'
                        }

                    </span>
                    <div className='bg-white p-4 my-4 rounded-2 portal-shadow-container'>

                        <div className="col-12 row g-0 mt-5 ">
                            <div className="col-3">
                                <div className='form-label'>
                                    Supplier Name*
                                </div>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="offset-1 col-3">
                                <div className='form-label'>
                                    Firm Name
                                </div>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="offset-1 col-3">
                                <div className='form-label'>
                                    Fssai No.
                                </div>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="col-12 row g-0 mt-4">
                            <div className="col-3">
                                <div className='form-label'>
                                    Email
                                </div>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="offset-1 col-3">
                                <div className='form-label'>
                                    Mobile No.
                                </div>
                                <input type="tel" className="form-control" />
                            </div>
                            <div className="offset-1 col-3">
                                <div className='form-label'>
                                    Alternate Mobile No.
                                </div>
                                <input type="tel" className="form-control" />
                            </div>
                        </div>
                        <div className="col-12 row g-0 mt-4">
                            <div className="col-3">
                                <div className='form-label'>
                                    Address
                                </div>
                                <textarea className="form-control" />
                            </div>
                            <div className=" offset-1 col-3">
                                <div className='form-label'>
                                    State
                                </div>
                                <Select
                                    options={stateList} />
                            </div>
                        </div>
                        <div className="col-12 row g-0 mt-4 align-items-baseline">
                            <div className="col-3">
                                <div className='form-label'>
                                    Supplier Type
                                </div>
                                <Select
                                    options={SupplierType} />
                            </div>
                            <div className="offset-1 col-3">

                                <div className='row g-0 align-items-center justify-content-between'>
                                    <div className='form-label col-8'>
                                        GST No.
                                    </div>
                                    <a href="https://services.gst.gov.in/services/searchtp" target='blank' className='col-3 mb-1 text-center bg-primary-link'>Verify</a>
                                </div>
                                <input type="text" className="form-control col-8" />
                            </div>
                            {
                                isUpdate ? (
                                    <div className=" offset-1 col-3">
                                        <div className='form-label'>
                                            Account Status <span className='ms-2'><Broadcast size={25} weight="fill" color={`${supplierData.accountStatus ? '#53BE25' : '#FF3A3A'}`} /></span>
                                        </div>
                                        <label class="toggle" for="uniqueID">
                                            <input type="checkbox" class="toggle__input" id="uniqueID" defaultChecked={supplierData.accountStatus} onChange={(e) => { setSupplierData((prev) => ({ ...supplierData, accountStatus: !prev.accountStatus })) }} />
                                            <span class="toggle-track">
                                                <span class="toggle-indicator">
                                                    <span class="checkMark">
                                                        <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                                                            <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                ) : null
                            }
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

export default AddSupplier