import React from 'react'
import AddSupplier from './AddSupplier'
import BaseTemplate from '../../Layout/BaseTemplate'

function SupplierPage({isUpdate}) {
  return (
    <BaseTemplate>
    <AddSupplier isUpdate={isUpdate}/>
    </BaseTemplate>
  )
}

export default SupplierPage