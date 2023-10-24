import { ArrowCircleLeft, Cube, GearSix } from '@phosphor-icons/react'
import React from 'react'

function Header() {
  return (
    <div className='row g-0 header-container'>
       <div className='col-12 row g-0 py-2 align-items-center'>
          <div className="col-1 ps-3 back-icon" title='Back'>
          <ArrowCircleLeft size={32} weight="fill" onClick={()=>{window.history.back()}} />
          </div>
          <div className="col-2">
          <Cube size={22} weight="fill" /> Master
          </div>
          <div className="col-9 row g-0 justify-content-end">
            <div className="col-1 setting-icon" title='Setting'>
            <GearSix size={32} weight="fill" />
            </div>
          </div>
       </div>
    </div>
  )
}

export default Header