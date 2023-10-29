import { CaretDown, CaretRight } from '@phosphor-icons/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function SideBarMenu({ data }) {
    const [isOpen, setIsOpen] = useState(false)
    const [pathName, setPathName] = useState("/")
    useEffect(() => {
        setPathName(window.location.pathname.split("/")[1])
    }, [])
    return (
        <div className="row g-0 mx-1 my-2">
            <button type="button" className={`rounded-3 col-12 sidebar-tab ${pathName === data.path ? 'sidebar-active' : ''}`} onClick={() => { setIsOpen(prev => !prev) }}>
                <div className="row g-0 justify-content-between align-items-center px-2" >
                    <div className="col-1">
                        {data.icon}
                    </div>
                    <div className="col-8">
                        {data.label}
                    </div>
                    <div className="col-1">
                        {
                            isOpen ? <CaretDown fontSize={15} /> : <CaretRight fontSize={15} />
                        }
                    </div>
                </div>
            </button>
            {
                isOpen ? (
                    <div className="col-12 row g-0 py-2">
                        {
                            data.links.map(sublinks => {
                                return (
                                    <div className='py-3 pe-2  ps-3 sidebar-link-container'>
                                        <Link to={sublinks.href} className='col-12 sidebar-links'>{sublinks.label}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default SideBarMenu