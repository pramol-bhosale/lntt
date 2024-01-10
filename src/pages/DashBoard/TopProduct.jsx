import { CurrencyInr } from '@phosphor-icons/react'
import React, { useState } from 'react'

function TopProduct() {
    const [topProducts, setTopProducts] = useState([
        {name : 'Nike Shoes', img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', quantity:100, totalPrice:10000},
        {name : 'Watch', img:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', quantity:100, totalPrice:10000},
        {name : 'Air Pods', img:'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', quantity:10, totalPrice:10020}
    ])
    return (
       <div className='TP_parent-container p-3 mt-4 rounded-3'>
       <div><strong>This Month Top products</strong></div>
        <div className='row g-0 TP_container mt-1'>
            {topProducts.map(data=>(
                <ProductItem data={data}/>
            ))}
        </div>
       </div>
    )
}

export default TopProduct

const ProductItem = ({data}) =>{
  return (
    <div className="col-12 row g-0 my-2 p-2 rounded-3">
                <div className="col-3">
                <img src={data.img} alt="" className=' rounded-3' />
                </div>
                <div className="col-9">
                   <div className="col-12 row g-0 p-2">
                    <div className='col-8'>
                     <div>
                        {data.name}
                     </div>
                     <div>
                        {data.quantity} PCS
                     </div>
                    </div>
                    <div className="col-4">
                     <CurrencyInr/> {data.totalPrice}
                    </div>
                   </div>
                </div>

            </div>
  )
}