import React from 'react'
import style from './style.css'
import BaseTemplate from '../../Layout/BaseTemplate'
import AddEmployee from './AddEmployee'
function EmployeePage({isUpdate}) {
  return (
    <BaseTemplate>
    <AddEmployee isUpdate={isUpdate}/>
    </BaseTemplate>
  )
}

export default EmployeePage