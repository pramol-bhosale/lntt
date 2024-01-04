import React, { useState } from 'react'
import BaseTemplate from '../../Layout/BaseTemplate'
import { MagnifyingGlass, Plus, X } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import SoloProduct from '../Product/SoloProduct'
import ProductTransactions from '../Product/ProductTransactions'
import SupplierTransactions from './SupplierTransactions'
import SoloSupplier from './SoloSupplier'

function SupplierHome() {
  const [searchEnabled, setSearchEnabled] = useState()
  return (
    <BaseTemplate>
         <div className='row g-0 '>
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
                    <Link className='col-10 btn btn-warning clr-white' to="/supplier/add"> <Plus size={25} /> Add Supplier</Link>
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
                      Supplier Name
                    </th>
                    <th>
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HP Computers</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>Dell Computers</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>Lenova Computers</td>
                    <td>100</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
          <div className="col-8 row g-0 ps-1">
            <div className="col-11 row g-0">
              <SoloSupplier />
              <SupplierTransactions />
            </div>
          </div>
        </div>
      </div>
    </BaseTemplate>
  )
}

export default SupplierHome