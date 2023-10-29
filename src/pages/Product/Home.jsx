import { DotsThreeOutlineVertical, DotsThreeVertical, MagnifyingGlass, Pencil, Scales, X } from '@phosphor-icons/react'
import { Plus } from '@phosphor-icons/react/dist/ssr'
import React, { useState } from 'react'
import SoloProduct from './SoloProduct'
import ProductTransactions from './ProductTransactions'
import { Link } from 'react-router-dom'
import BaseTemplate from '../../Layout/BaseTemplate'

function ProductHome() {
  const [searchEnabled, setSearchEnabled] = useState()
  return (
    <BaseTemplate>
      <div className='row g-0 '>
        <div className="col-12 row g-0 mb-3 justify-content-end">
          <button className="col-auto btn btn-outline-primary">Category</button>
          <button className="ms-1 col-auto btn btn-outline-primary"> <Scales size={25} weight="fill" /> Unit</button>
        </div>
        <div className="col-12 row g-0">
          <div className="col-4 card">
            <div className="row g-0 px-3 pt-3 justify-content-between">
              <div className={`${searchEnabled ? ' col-12 row g-0' : 'col-2 align-self-center'}`}>
                {
                  searchEnabled ?
                    (
                      <>
                        <input type="text" className='app-input col-7' />
                        <X size={25} weight="bold" className='app-icon col-2' onClick={() => { setSearchEnabled(false) }} />
                      </>
                    ) : (
                      <MagnifyingGlass size={25} weight="bold" className='app-icon' onClick={() => { setSearchEnabled(true) }} />
                    )
                }
              </div>
              {
                searchEnabled ? null : (
                  <div className="col-6 row g-0 align-items-center justify-content-between">
                    <Link className='col-10 btn btn-warning clr-white' to="/product/add"> <Plus size={25} /> Add Product</Link>
                    {/* <div className='col-1 dropdown'>
                      <a class="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <DotsThreeOutlineVertical size={32} weight="fill" className='app-icon' />
                      </a>
                      <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" to="#"></Link></li>
                        <li><Link class="dropdown-item" to="#">Another action</Link></li>
                        <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                      </ul>
                    </div> */}
                  </div>
                )
              }
            </div>
            <div className="row g-0 border-top mt-3">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>
                      Product Name
                    </th>
                    <th>
                      Stock
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>T-Shirt</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>T-Shirt</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>T-Shirt</td>
                    <td>100</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
          <div className="col-8 row g-0 ps-1">
            <div className="col-11 row g-0">
              <SoloProduct />
              <ProductTransactions />
            </div>
          </div>
        </div>
      </div>
    </BaseTemplate>
  )
}

export default ProductHome