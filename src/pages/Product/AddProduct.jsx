import { ArrowClockwise, Cube, FloppyDisk, Trash } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import PopUp from '../../components/Modal'
import { DELETE_SUPPLIER_POPUP_CODE, RESET_FORM_POPUP_CODE, UPDATE_RECORD_POPUP_CODE } from '../../utils/Constants'
import { ProductUnitList } from '../../utils/Data'
import { findPerFromVals, findPercOfValAndVal } from '../../utils/calculations'

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
    const [popupCallBack, setPopupCallBack] = useState();
    const [initialLoadData, setInitialLoadData] = useState();
    const [data, setData] = useState({
        name: "",
        unit: "",
        HSN: "",
        rate: "",
        mrp: "",
        margin: "",
        saleRate: "",
        wholeSale: {
            margin: "",
            rate: ""
        },
        stock: "",
        alertQuantity: "",
        discount: "",
        gst: {
            value: "",
            included: false
        },
        images: []
    })
    useEffect(() => {
        setMainLabel(isUpdate)
    }, [isUpdate]);
    useEffect(() => {
        if (isUpdate) {
            setInitialLoadData(
                {
                    name: "T-shirt",
                    unit: "g",
                    HSN: "123",
                    rate: "123",
                    mrp: "123",
                    margin: "1",
                    saleRate: "232",
                    wholeSale: {
                        margin: "1",
                        rate: "23"
                    },
                    stock: "100",
                    alertQuantity: "11",
                    discount: "1",
                    gst: {
                        value: "10",
                        included: false
                    },
                    images: []
                }
            )
        } else {
            setInitialLoadData(
                {
                    name: "",
                    unit: "",
                    HSN: "",
                    rate: "",
                    mrp: "",
                    margin: "",
                    saleRate: "",
                    wholeSale: {
                        margin: "",
                        rate: ""
                    },
                    stock: "",
                    alertQuantity: "",
                    discount: "",
                    gst: {
                        value: "",
                        included: false
                    },
                    images: []
                }
            )
        }
    }, [isUpdate]);
    useEffect(() => {
        setData(initialLoadData)
    }, [initialLoadData]);
    const calulateSaleRateFromMargin = (val, percentage) => {
        if (val) {
            let calRate = findPercOfValAndVal(val, percentage);
            setData(prev => ({ ...prev, saleRate: calRate }));
        }
    }
    const calculateMarginFromSaleRate = (saleRate) => {
        if (data.rate) {
            let calMargin = findPerFromVals(data.rate, saleRate);
            setData(prev => ({ ...prev, margin: calMargin }))
        }
    }
    const cal = (sale = data.sale, purchase = data.rate, margin = data.margin, flag) => {
        switch (flag) {
            case 1:
                let calRate = findPercOfValAndVal(purchase, margin);
                setData(prev => ({ ...prev, saleRate: calRate }));
                return;
            case 2:
                let calMargin = findPerFromVals(purchase, sale);
                setData(prev => ({ ...prev, margin: calMargin }))
                return;
            case 3:
                let calPRate = findPercOfValAndVal(purchase, margin * -1);
                setData(prev => ({ ...prev, rate: calPRate }))
                return;
        }
    }
    return (
        <>
            <PopUp code={popupCode} />
            <div className="row g-0">
                <div className="col-12 align-items-center">
                    <div className="col-12 row g-0 justify-content-between">
                        <div className="col-6">
                            <Cube size={30} weight="fill" /> <span className='addproduct-main-heading'>
                                {
                                    mainLabel ? 'Update Product' : 'Add Product'
                                }

                            </span>
                        </div>
                        <div className="col-2 text-end">
                            {window.location.pathname}
                        </div>
                    </div>
                    <div className="col-12 row g-0 bg-white p-4 my-4 rounded-2 portal-shadow-container">
                        <div className="col-12 row g-0 mt-4">
                            <div className="col-3">
                                <div className='form-label'>
                                    Product Name*
                                </div>
                                <input type="text" className="form-control" onChange={(e) => { setData(prev => ({ ...prev, name: e.target.value })) }} value={data?.name} />
                            </div>
                            <div className="offset-1 col-3">
                                <div className='form-label'>
                                    Unit
                                </div>
                                <Select
                                    options={ProductUnitList}
                                    onChange={(value) => { setData(prev => ({ ...prev, unit: value })) }}
                                    value={data?.unit}
                                />
                            </div>
                            <div className="offset-1 col-3">
                                <div className='form-label'>
                                    HSN
                                </div>
                                <input type="text" className="form-control" onChange={(e) => { setData(prev => ({ ...prev, HSN: e.target.value })) }} value={data?.HSN} />
                            </div>
                        </div>
                        <div className="col-12 row g-0 mt-4">
                            <div className="col-3">
                                <div className='form-label'>
                                    Purchase Rate*
                                </div>
                                <input type="number" className="form-control"  onChange={(e) => { setData(prev => ({ ...prev, rate: e.target.value })); }} value={data?.rate} />
                            </div>
                            <div className="offset-1 col-3">
                                <div className='form-label'>
                                    M.R.P
                                </div>
                                <input type="number" className="form-control" min={0} onChange={(e) => { setData(prev => ({ ...prev, mrp: e.target.value })) }} value={data?.mrp} />
                            </div>
                        </div>
                        <div className="col-12 row g-0 mt-4 align-items-baseline">
                            <div className="col-3">
                                <div className='form-label'>
                                    Margin %
                                </div>
                                <input type="number" className="form-control" onChange={(e) => { setData(prev => ({ ...prev, margin: e.target.value })); cal(undefined,undefined, e.target.value,1); }} value={data?.margin} />
                            </div>
                            <div className="offset-1 col-3">
                                <div className='form-label'>
                                    Sale Rate*
                                </div>
                                <input type="number" className="form-control" min={0} onChange={(e) => { setData(prev => ({ ...prev, saleRate: e.target.value })); cal(e.target.value,undefined,undefined,3);  }} value={data?.saleRate} />
                            </div>
                            <div className="offset-1 col-3">
                                <fieldset class="border p-2 rounded-2 px-3 pb-3">
                                    <legend class="float-none w-auto p-2 addproduct-legend">Wholesale</legend>
                                    <div className="row g-0">
                                        <div className="col-5">
                                            <div className='form-label'>
                                                Margin %
                                            </div>
                                            <input type="number" className="form-control" min={0} onChange={(e) => { setData(prev => ({ ...prev, wholeSale: { ...prev.wholeSale, margin: e.target.value } })) }} value={data?.wholeSale.margin} />
                                        </div>
                                        <div className="offset-1 col-5">
                                            <div className='form-label'>
                                                Rate
                                            </div>
                                            <input type="number" className="form-control" min={0} onChange={(e) => { setData(prev => ({ ...prev, wholeSale: { ...prev.wholeSale, rate: e.target.value } })) }} value={data?.wholeSale.rate} />
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
                                <input type="text" className="form-control" onChange={(e) => { setData(prev => ({ ...prev, stock: e.target.value })) }} value={data?.stock} />
                            </div>
                            <div className="offset-1 col-3">
                                <div className='form-label'>
                                    Alert Quantity
                                </div>
                                <input type="number" className="form-control" min={0} onChange={(e) => { setData(prev => ({ ...prev, alertQuantity: e.target.value })) }} value={data?.alertQuantity} />
                            </div>
                            <div className="offset-1 col-3">
                                <div className='form-label'>
                                    Discount %
                                </div>
                                <input type="text" className="form-control" onChange={(e) => { setData(prev => ({ ...prev, discount: e.target.value })) }} value={data?.discount} />
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
                                    onChange={(value) => { setData(prev => ({ ...prev, gst: { ...prev.gst, value: value } })) }}
                                    value={data?.gst.value}
                                />
                            </div>
                            <div className="offset-1 col-3">
                                <div className="form-label">
                                    Is GST included in Rate ?
                                </div>
                                <Select
                                    options={GSTextraList}
                                    menuPlacement='top'
                                    onChange={(value) => { setData(prev => ({ ...prev, gst: { ...prev.gst, included: value } })) }}
                                    value={data?.gst.included}
                                />
                            </div>
                            <div className="offset-1 col-3">
                                <div className="form-label">
                                    Upload Image
                                </div>
                                <input type="file" name="" id="" />
                            </div>
                        </div>
                        <div className="col-12 row g-0 mt-5 justify-content-end">
                            <div className="col-7 row g-0 justify-content-end">
                                <div className="col-2 align-self-center btn btn-outline-danger" data-bs-toggle={`${popupCode ? 'modal' : ''}`} data-bs-target="#confirmModal" onClick={() => {
                                    setPopupCode(RESET_FORM_POPUP_CODE); setPopupCallBack(() => {
                                        setData(initialLoadData);
                                    })
                                }}>
                                    <ArrowClockwise size={25} /> Reset
                                </div>
                                {
                                    isUpdate ? (
                                        <div className="offset-1 col-2 btn btn-danger" data-bs-toggle={`${popupCode ? 'modal' : ''}`} data-bs-target="#confirmModal" onClick={() => { setPopupCode(DELETE_SUPPLIER_POPUP_CODE) }}>
                                            <Trash size={25} weight="fill" /> Delete
                                        </div>
                                    ) : null
                                }
                                <div className="col-2 offset-1 btn btn-primary" data-bs-toggle={`${popupCode ? 'modal' : ''}`} data-bs-target="#confirmModal" onClick={() => { setPopupCode(UPDATE_RECORD_POPUP_CODE); console.log(data) }}>
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