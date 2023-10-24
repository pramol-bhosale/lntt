import { Cube } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import { sideBarLinks } from '../../utils/Data'

function Sidebar() {
    const [pathName, setPathName] = useState("/")
    useEffect(()=>{
      setPathName(window.location.pathname.split("/")[1])
    },[])
    return (
        <div className='row g-0 sidebar-container vh-100'>
            <div>
                <div className="row g-0 py-3">
                    <div className="col-10 text-center py-3">
                        <Cube size={22} weight="fill" /> Master
                    </div>
                    {
                        sideBarLinks.map(element => {
                            return (
                                <div className="btn-group dropend">
                                    <button type="button" className={`col-10 sidebar-tab dropdown-toggle ${pathName === element.path ? 'sidebar-active' : ''}`} data-bs-toggle="dropdown" aria-expanded="false">
                                        {element.label}
                                    </button>
                                    <ul className="dropdown-menu">
                                        {
                                            element.links.map(link => {
                                                return (
                                                    <li><a className="dropdown-item" href={link.href}>{link.label}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                    {/* <div className="btn-group dropend">
                        <button type="button" className="col-10 sidebar-tab sidebar-active dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Product
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Add Product</a></li>
                            <li><a className="dropdown-item" href="#">Update Product</a></li>
                            <li><a className="dropdown-item" href="#">Master Stock</a></li>
                        </ul>
                    </div>
                    <div className="btn-group dropend">
                        <button type="button" className="col-10 sidebar-tab dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Supplier
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Add Supplier</a></li>
                            <li><a className="dropdown-item" href="#">Update Supplier</a></li>
                        </ul>
                    </div>
                    <div className="btn-group dropend">
                        <button type="button" className="col-10 sidebar-tab dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Employee
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Add Employee</a></li>
                            <li><a className="dropdown-item" href="#">Update Employee</a></li>
                        </ul>
                    </div>
                    <div className="btn-group dropend">
                        <button type="button" className="col-10 sidebar-tab dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Customer
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Add Customer</a></li>
                            <li><a className="dropdown-item" href="#">Update Customer</a></li>
                        </ul>
                    </div>
                    <div className="btn-group dropend">
                        <button type="button" className="col-10 sidebar-tab dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Report
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Revenue</a></li>
                            <li><a className="dropdown-item" href="#">Orders</a></li>
                            <li><a className="dropdown-item" href="#">Customers</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Sidebar