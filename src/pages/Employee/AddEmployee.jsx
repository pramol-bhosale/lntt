import { ArrowClockwise, Broadcast, Cube, Fingerprint, FloppyDisk, Trash, UserCircleGear } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { ACCESS_CONTROL_POPUP_CODE, DELETE_SUPPLIER_POPUP_CODE, RESET_FORM_POPUP_CODE, UPDATE_RECORD_POPUP_CODE, stateList } from '../../utils/Constants';
import style from './style.css';
import PopUp from '../../components/Modal';
import { EmployeeRoles } from '../../utils/Data';

function AddEmployee({ isUpdate }) {
    const [mainLabel, setMainLabel] = useState(isUpdate);
    const [popupCode, setPopupCode] = useState(RESET_FORM_POPUP_CODE)
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
                    <UserCircleGear size={30} weight="fill" /> <span className='addEmployee-main-heading'>
                        {
                            mainLabel ? 'Update Employee Information' : 'Add Employee Information'
                        }

                    </span>
                    <div className='bg-white p-4 my-4 rounded-2 portal-shadow-container'>
                        <div className="col-12 row g-0 mt-3">
                            <div className="col-3">
                                <div className='form-label'>
                                    Employee Name*
                                </div>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="offset-1 col-3">
                                <div className='form-label'>
                                    Aadhar No.
                                </div>
                                <input type="text" className="form-control" />
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
                            <div className=" offset-1 col-3">
                                <div className='form-label'>
                                    Access
                                </div>
                                <button type='button' className='btn btn-primary' data-bs-toggle={`${popupCode ? 'modal' : ''}`} data-bs-target="#confirmModal" onClick={() => { setPopupCode(ACCESS_CONTROL_POPUP_CODE) }}>
                                    Grant Access
                                    <Fingerprint size={25} weight="fill" />
                                </button>
                            </div>
                        </div>
                        <div className="col-12 row g-0 mt-2">
                            <div className="col-7">
                                <fieldset class="border p-2 rounded-2 px-3 pb-3">
                                    <legend class="float-none w-auto p-2 addEmployee-legend">Login Credentials</legend>
                                    <div className="row g-0">
                                        <div className="col-3">
                                            <div className='form-label'>
                                                Username
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-text">@</div>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="offset-1 col-3">
                                            <div className='form-label'>
                                                Password
                                            </div>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="offset-1 col-3">
                                            <div className='form-label'>
                                                Confirm  Password
                                            </div>
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div className=" offset-1 col-3">
                                <div className='form-label'>
                                    Role
                                </div>
                                <Select
                                    options={EmployeeRoles} />
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

export default AddEmployee