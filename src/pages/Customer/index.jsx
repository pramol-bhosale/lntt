import React from 'react'
import BaseTemplate from '../../Layout/BaseTemplate'
import AddCustomer from './AddCustomer'

function CustomerPage({isUpdate}) {
  return (
    <BaseTemplate>
    <AddCustomer isUpdate={isUpdate}/>
    </BaseTemplate>
  )
}

export default CustomerPage