import { ArrowCircleLeft, Cube, GearSix, PlusCircle } from '@phosphor-icons/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  return (
    <div className='col-10 header-container py-2'>
      <div className="row g-0">
        <div className='col-12 row g-0 py-2 align-items-center justify-content-between'>
          <div className="col-1 ps-3 back-icon" title='Back'>
            <ArrowCircleLeft size={32} onClick={() => { window.history.back() }} />
          </div>
          <div className="col-9 row g-0 justify-content-end">
            <div className="col-2">
              <button className='btn btn-outline-success align-self-center'><PlusCircle size={25} weight="fill" /> Add Sale</button>
            </div>
            <div className="col-3">
              <button className='btn btn-outline-primary align-self-center'><PlusCircle size={25} weight="fill" /> Add Purchase</button>
            </div>
            <div className="col-1 setting-icon" title='Setting'>
              <GearSix size={32} onClick={() => { navigate("/setting") }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header