import AccessTable from "../../pages/Employee/AccessTable"
import TableLayoutPopup from "../../pages/Stock/TableLayoutPopup"
import { ACCESS_CONTROL_POPUP_CODE, DELETE_SUPPLIER_POPUP_CODE, RESET_FORM_POPUP_CODE, TABLE_LAYOUT_POPUP_CODE, UPDATE_RECORD_POPUP_CODE } from "../../utils/Constants"

export const deleteSupplierModal = {
    header: 'Warning: Deleting Supplier',
    body: <>
        Are you sure you want to delete this supplier?
        <br />
        <br />
        Please note that all data related to this supplier will be <strong>permanently deleted</strong>, and you will not be able to recover it.
        <br />
        <br />
        If you wish to temporarily remove the supplier's account, you can change its status to 'Disabled' and enable it again later when needed.
        </>,
    CTAButtons : {
        name:'Delete',
        classNames:'btn btn-danger clr-white'
    },
    classNames: 'modal-lg'
}

export const resetData = {
    header: 'Warning: Reset Form',
    body: <>Resetting the form will permanently clear all entered data. Are you sure you want to proceed?</>,
    CTAButtons : {
        name:'Reset',
        classNames:'btn btn-warning clr-white'
    },
    classNames: ''
}

export const updateData = {
    header: 'Update Existing Record',
    body: <>Are you sure you want to update the existing record? 
    <br/>
    This action will modify the current data with the new information provided.
    <br/>
     Please review the changes carefully before proceeding.</>,
    CTAButtons : {
        name:'Update',
        classNames:'btn btn-warning clr-white'
    },
    classNames: 'modal-lg'
}

export const accessControlData = {
    header: 'Grant User Access',
    body: <AccessTable/>,
    CTAButtons : {
        name:'Grant Access',
        classNames:'btn btn-primary'
    },
    classNames: 'modal-lg'
}

export const TableLayoutData = {
    header: 'Select Columns to Display',
    body: <TableLayoutPopup/>,
    CTAButtons : {
        name:'Apply',
        classNames:'btn btn-primary'
    },
    classNames: 'modal-lg'
}

export const modalMap = [
    {code : DELETE_SUPPLIER_POPUP_CODE, data:deleteSupplierModal},
    {code : RESET_FORM_POPUP_CODE, data:resetData},
    {code : UPDATE_RECORD_POPUP_CODE, data:updateData},
    {code : ACCESS_CONTROL_POPUP_CODE, data:accessControlData},
    {code : TABLE_LAYOUT_POPUP_CODE, data:TableLayoutData},
   ]
   