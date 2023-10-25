import { Cube } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import { sideBarLinks } from '../../utils/Data'
import { useNavigate } from 'react-router-dom'

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
                                        {element.icon}  {element.label}
                                    </button>
                                    <ul className="dropdown-menu">
                                        {
                                            element.links.map(link => {
                                                return (
                                                    <li className='dropdown-item sidebar-links' onClick={() => { redirect(link.href) }}>{link.label}</li>
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

export const Sidebar2 = () => {
    return (

        <div id="nav-bar">
            <input id="nav-toggle" type="checkbox" />
            <div id="nav-header"><a id="nav-title" href="https://codepen.io" target="_blank">Master</a>
                <label for="nav-toggle"><span id="nav-toggle-burger"></span></label>
                <hr />
            </div>
            <div id="nav-content">
                <div class="nav-button"><i class="fas fa-palette"></i><span>Your Work</span></div>
                <div class="nav-button"><i class="fas fa-images"></i><span>Assets</span></div>
                <div class="nav-button"><i class="fas fa-thumbtack"></i><span>Pinned Items</span></div>
                <hr />
                <div class="nav-button"><i class="fas fa-heart"></i><span>Following</span></div>
                <div class="nav-button"><i class="fas fa-chart-line"></i><span>Trending</span></div>
                <div class="nav-button"><i class="fas fa-fire"></i><span>Challenges</span></div>
                <div class="nav-button"><i class="fas fa-magic"></i><span>Spark</span></div>
                <hr />
                <div class="nav-button"><i class="fas fa-gem"></i><span>Codepen Pro</span></div>
                <div id="nav-content-highlight"></div>
            </div>
            <input id="nav-footer-toggle" type="checkbox" />
            <div id="nav-footer">
                <div id="nav-footer-heading">
                    <div id="nav-footer-avatar"><img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" /></div>
                    <div id="nav-footer-titlebox"><a id="nav-footer-title" href="https://codepen.io/uahnbu/pens/public" target="_blank">uahnbu</a><span id="nav-footer-subtitle">Admin</span></div>
                    <label for="nav-footer-toggle"><i class="fas fa-caret-up"></i></label>
                </div>
                <div id="nav-footer-content">
                    <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}