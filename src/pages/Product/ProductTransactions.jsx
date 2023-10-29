import React, { useState } from 'react'
import Select from 'react-select';
import { EntryiCountList } from '../../utils/Data';
import ExcelIcon from './../../media/images/excel-icon.png'
function ProductTransactions() {
  const [productList, setProductList] = useState([
    { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' },
    { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' },
    { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' },
    { name: 'T-Shirt', stock: '20', purchaseRate: '350', saleRate: '450', discount: '5', barcode: '185647834', hsn: 'HSN0973' }
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
                Product Name
              </th>
              <th>
                Stock
              </th>
              <th>
                Purchase Rate
              </th>
              <th>
                Sale Rate
              </th>
              <th>
                Discount
              </th>
              <th>
                Barcode
              </th>
              <th>
                HSN
              </th>
            </tr>
          </thead>
          <tbody>
            {
              productList.map((row) => {
                return <tr>
                  <td>{row.name}</td>
                  <td>{row.stock}</td>
                  <td>{row.purchaseRate}</td>
                  <td>{row.saleRate}</td>
                  <td>{row.discount}</td>
                  <td>{row.barcode}</td>
                  <td>{row.hsn}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTransactions

