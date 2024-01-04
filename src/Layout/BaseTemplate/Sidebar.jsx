import { Cube } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import { sideBarLinks } from '../../utils/Data'
import { useNavigate } from 'react-router-dom'
import SideBarMenu from './SideBarMenu'

function Sidebar() {
    const [pathName, setPathName] = useState("/")
    useEffect(() => {
        setPathName(window.location.pathname.split("/")[1])
    }, [])
    const navigator = useNavigate()
    const redirect = (path) => {
        navigator(path)
    }
    return (
        <div className='col-2 sidebar-container vh-100'>
            <div className='row g-0'>
                <div>
                    <div className="row g-0 py-3">
                        <div className="col-10 text-center py-3 sidebar-heading">
                            <Cube size={22} weight="fill" /> Master
                        </div>
                        <div className="mt-4">
                        {
                            sideBarLinks.map(element => {
                                return (
                                    <SideBarMenu data={element} key={element.path} />
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
