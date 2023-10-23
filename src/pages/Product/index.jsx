import React from 'react'
import AddProduct from './AddProduct'
import style from './style.css'
import BaseTemplate from '../../Layout/BaseTemplate'
function ProductPage({isUpdate}) {
  return (
    <BaseTemplate>
    <AddProduct isUpdate={isUpdate}/>
    </BaseTemplate>
  )
}

export default ProductPage