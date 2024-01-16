import React, { useState } from 'react'
import style from './style.css'
import { CaretDown } from '@phosphor-icons/react'
import Row from './Row';
function CDTable({ headers, data, isCollapse = false }) {
    // const [totalCols, setTotalCols]= useState(headers.length[])
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
                        {
                            isCollapse ?
                                <th>
                                    Action
                                </th> : null
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((e) => (
                            <Row headers={headers} isCollapse={isCollapse} data={e} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CDTable