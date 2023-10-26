import React, { useState } from 'react'
import style from './style.css'
import { AccessTableModMap, AccessValues } from '../../utils/Data'
function AccessTable() {
    const [activeTab, setSctiveTab] = useState(0)
    const [accessList, setAccessList] = useState()
    return (
        <>
            <h5 className='mt-2 mb-4'>Choose the access permissions you want to grant to the user.</h5>
            <div className='mt-3 row g-0 justify-content-evenly'>
                {
                    AccessTableModMap.map((elem, index) => {
                        return (
                            <div className={`col-2 p-2 access-table-tab ${activeTab === index ? 'access-table-active-tab' : null}`} onClick={() => { setSctiveTab(index) }}>
                                {elem.label}
                            </div>
                        )
                    })
                }
            </div>
            <div className="access-table-container px-3 py-4 rounded-3">
                <table className="table border access-table">
                    <thead>
                        <tr>
                            <th>
                                Access
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AccessValues[AccessTableModMap[activeTab]?.accessor].map(element => {
                                return (
                                    <tr>
                                        <td>
                                            {element.label}
                                        </td>
                                        <td>
                                            <input type="checkbox" className="form-check-input" />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AccessTable