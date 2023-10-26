import React from 'react'
import style from './style.css'
function AccessTable() {
    return (
        <>
            <h5 className='mt-2 mb-4'>Choose the access permissions you want to grant to the user.</h5>
            <table className="table access-table">
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
                    <tr>
                        <td>
                            Read
                        </td>
                        <td>
                            <input type="checkbox" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Sales Invoice Modify
                        </td>
                        <td>
                            <input type="checkbox" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Sales Invoice Change Rate
                        </td>
                        <td>
                            <input type="checkbox" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Sales Invoice Change Rate
                        </td>
                        <td>
                            <input type="checkbox" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Sales Invoice Change Rate
                        </td>
                        <td>
                            <input type="checkbox" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Sales Invoice Change Rate
                        </td>
                        <td>
                            <input type="checkbox" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default AccessTable