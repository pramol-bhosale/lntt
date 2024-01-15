import React, { useEffect, useState } from 'react'
import CDTable from '../../components/Table'
import { ClockClockwise } from '@phosphor-icons/react';

function RecentTransaction() {
    const [headers, setHeaders]= useState([]);
    const [data, setData] = useState([]);
    useEffect(()=>{
     setHeaders([
        { name : 'Ref. No', accessor:'transaction_id'},
        { name: 'Party Name', accessor:'party'},
        { name: 'Product', accessor:'product'},
        { name: 'Quantity', accessor:'quantity'},
        { name: 'Total', accessor:'total'}
     ])
    },[]);

    useEffect(()=>{
      setData([
        {transaction_id:'1',party:'Pramol',product:'T-Shirt',quantity:'120',total:'1200'},
        {transaction_id:'1',party:'Pramol',product:'T-Shirt',quantity:'120',total:'1200'},
        {transaction_id:'1',party:'Pramol',product:'T-Shirt',quantity:'120',total:'1200'},
        {transaction_id:'1',party:'Pramol',product:'T-Shirt',quantity:'120',total:'1200'},
        {transaction_id:'1',party:'Pramol',product:'T-Shirt',quantity:'120',total:'1200'},
      ])
    },[]);
    return (
        <div className='row g-0 d_recent-transaction-container p-3 rounded-3'>
            <div className="col-12 mb-3 mt-2">
                <div className='d_recent-transaction-header'><ClockClockwise size={25} weight="light" /> Recent Transactions</div>
            </div>
            <CDTable headers={headers} data={data}/>
        </div>
    )
}

export default RecentTransaction