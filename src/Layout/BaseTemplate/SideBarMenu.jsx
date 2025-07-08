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
        setIsOpen(pathName === data.path)
    }, [window.location])
    return (
        <div className="row g-0 my-2">
            <button type="button" className={` col-12 sidebar-tab ${pathName === data.path ? 'sidebar-active' : ''}`} onClick={() => { setIsOpen(prev => !prev) }}>
                <div className="row g-0 justify-content-around align-items-center px-2" >
                    <div className="col-1">
                        {data.icon}
                    </div>
                    <Link to={`/${data.path}`} className="col-9 sidebar-tab-link">
                        {data.label}
                    </Link>
                </div>
            </button>
        </div>
    )
}

export default SideBarMenu