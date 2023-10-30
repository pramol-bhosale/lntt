import { Pencil } from '@phosphor-icons/react'
import React from 'react'

function SoloProduct() {
  return (
    <div className="col-12 card p-3">
              <div className="row justify-content-between align-items-center">
                <div className="col-6">
                 <strong> T-Shirt</strong>
                </div>
                <div className="col-2 text-end">
                  <button className='btn btn-primary'><Pencil fontSize={16} weight='fill'/> Edit</button>
                </div>
              </div>
              <div className="row g-0 mt-2 justify-content-between">
                <div className="col-5 product-meta-data">
                  <div className='mb-1'>
                    SALE PRICE : <span className='app-green-clr'> 500 </span>
                  </div>
                  <div>
                    PURCHASE PRICE : <span className='app-green-clr'> 500 </span>
                  </div>
                </div>
                <div className="col-5 product-meta-data">
                  <div className='mb-1'>
                    STOCK QUANTITY : <span className='app-green-clr'> 500 </span>
                  </div>
                  <div>
                    STOCK VALUE : <span className='app-green-clr'> 500 </span>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default SoloProduct