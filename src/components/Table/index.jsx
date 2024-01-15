import React from 'react'
import style from './style.css'
function CDTable({ headers, data }) {

    return (
        <div className='cd-table-parent'>
            <table className='table table-hover cd-table table-bordered'>
            <thead>
                <tr>
                {
                    headers.map((h) => (
                        <th>{h.name}</th>
                    ))
                }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((e) => (
                        <tr>
                            {
                                headers.map((h) => (
                                    <td>{e[h.accessor]}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    )
}

export default CDTable