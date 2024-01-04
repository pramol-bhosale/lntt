import React, { useState } from 'react'
import Select from 'react-select';
import { EntryiCountList } from '../../utils/Data';
import ExcelIcon from './../../media/images/excel-icon.png'
function SupplierTransactions() {
    const [supplierList, setSupplierList] = useState([
        { Type: 'Sale', Number: '30', Date: '12/12/2023', Total: '450', balance: '5', status: 'Paid' },
        { Type: 'Sale', Number: '30', Date: '12/12/2023', Total: '450', balance: '5', status: 'Paid' },
        { Type: 'Sale', Number: '30', Date: '12/12/2023', Total: '450', balance: '5', status: 'Paid' },
        { Type: 'Sale', Number: '30', Date: '12/12/2023', Total: '450', balance: '5', status: 'Paid' }
      ])
      return (
        <div className="col-12 card mt-3 p-3">
          <div className="row g-0 justify-content-between">
             <h5 className="col-6">
              Transactions
             </h5>
             <span className='col-1'>
              <img src={ExcelIcon} alt="" className='data-export-excel-icon app-icon' />
             </span>
          </div>
          <div className="col-12 row g-0 justify-content-between">
            <div className="col-7 row g-0 align-items-center mt-3">
              <div className="col-2">
                Show
              </div>
              <div className="col-3">
                <Select options={EntryiCountList} defaultValue={EntryiCountList[0]} />
              </div>
              <div className="col-3 text-center">
                Entries
              </div>
            </div>
            <div className="col-4 row g-0 align-items-center">
              <div className="col-4">
                Search:
              </div>
              <div className="col-8">
                <input type="text" className='form-control d-inline' />
              </div>
            </div>
          </div>
          <div className='mt-3'>
            <table className='table stock-table table-bordered table-hover ' id='transactionTable'>
              <thead>
                <tr>
                  <th>
                    Type
                  </th>
                  <th>
                    Number
                  </th>
                  <th>
                    Date
                  </th>
                  <th>
                    Total
                  </th>
                  <th>
                    Balance
                  </th>
                  <th>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  supplierList.map((row) => {
                    return <tr>
                      <td>{row.Type}</td>
                      <td>{row.Number}</td>
                      <td>{row.Date}</td>
                      <td>{row.balance}</td>
                      <td>{row.Total}</td>
                      <td>{row.status}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default SupplierTransactions