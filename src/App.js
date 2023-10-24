import logo from './logo.svg';
import './App.css';
import BaseTemplate from './Layout/BaseTemplate';
import ProductPage from './pages/Product';
import StockPage from './pages/Stock';
import SupplierPage from './pages/Supplier';
import CustomerPage from './pages/Customer';
import EmployeePage from './pages/Employee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      // <EmployeePage isUpdate={true} />
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route path='product/add' element={<ProductPage isUpdate={false}/>}/>
        <Route path='product/update' element={<ProductPage isUpdate={true}/>}/>
        <Route path='product/stock' element={<StockPage/>}/>
        <Route path='supplier/add' element={<SupplierPage isUpdate={false}/>}/>
        <Route path='supplier/update' element={<SupplierPage isUpdate={true}/>}/>
        <Route path='customer/add' element={<CustomerPage isUpdate={false}/>}/>
        <Route path='customer/update' element={<CustomerPage isUpdate={true}/>}/>
        <Route path='employee/add' element={<EmployeePage isUpdate={false}/>}/>
        <Route path='employee/update' element={<EmployeePage isUpdate={true}/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
   
  );
}

export default App;
