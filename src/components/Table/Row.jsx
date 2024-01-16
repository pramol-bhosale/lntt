import { CaretDown, CaretUp } from '@phosphor-icons/react'
import React, { useState } from 'react'

function Row({ headers, isCollapse, data }) {
    const [showCellData, setShowCellData] = useState(false);

    return (
        <>
            <tr className={`${showCellData ? 'table-active' : null}`}>
                {
                    headers.map((h) => (
                        <td>{data[h.accessor]}</td>
                    ))
                }
                {
                    isCollapse ?
                        <td className='text-center d_recent-transaction-action-cell'>
                            <button onClick={() => { setShowCellData(prev => !prev) }}>
                                {
                                    showCellData ? <CaretUp size={18} weight="light" />
                                        : <CaretDown size={18} weight="light" />
                                }
                            </button>
                        </td> : null
                }
            </tr>
            {
                showCellData ? (
                    <tr>
                        <td colSpan={headers.length + (isCollapse ? 1 : 0)}>
                            <div>
                                History
                            </div>
                            Need to Discuss what want to show over here
                        </td>
                    </tr>
                ) : null
            }
        </>
    )
}

export default Row