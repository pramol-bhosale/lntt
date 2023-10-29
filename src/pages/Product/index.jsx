import React from 'react'
import AddProduct from './AddProduct'
import style from './style.css'
import BaseTemplate from '../../Layout/BaseTemplate'
import ProductHome from './Home'
import ProductTransactions from './ProductTransactions'
function ProductPage({isUpdate}) {
  return (
    <BaseTemplate>
    <AddProduct isUpdate={isUpdate}/>
    </BaseTemplate>
  )
}

export default ProductPage