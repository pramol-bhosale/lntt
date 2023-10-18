import { ArrowClockwise, Cube, FloppyDisk } from '@phosphor-icons/react'
import React from 'react'
import Select from 'react-select'

function AddProduct() {
    const unitList = [
        { label: 'Kilogram', value: 'kg' },
        { label: 'Liter', value: 'lt' }
    ]
    const GSTList = [
        { label: '5%', value: '5' },
        { label: '10%', value: '10' },
        { label: '15%', value: '15' }
    ]
    const GSTextraList = [
        { label: 'Yes', value: true },
        { label: 'No', value: false }
    ]
    return (
        <div className="row g-0">
            <div className="col-12 align-items-center">
                <Cube size={30} weight="fill" /> <span className='addproduct-main-heading'>Add Product</span>
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
                            options={unitList}
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
                <div className="col-12 row g-0 mt-3 justify-content-end">
                    <div className="col-2 app-btn">
                    <ArrowClockwise size={25} weight="fill" /> Reset
                    </div>
                    <div className="col-2 offset-1 app-btn">
                    <FloppyDisk size={25} weight="fill" /> Save
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct