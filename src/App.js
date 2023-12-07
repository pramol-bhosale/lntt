import logo from './logo.svg';
import './App.css';
import BaseTemplate from './Layout/BaseTemplate';
import ProductPage from './pages/Product';
import StockPage from './pages/Stock';
import SupplierPage from './pages/Supplier';
import CustomerPage from './pages/Customer';
import EmployeePage from './pages/Employee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/Login/ForgotPassword';
import SettingPage from './pages/Setting';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import ProductHome from './pages/Product/Home';
import SupplierHome from './pages/Supplier/Home';
import ReportsPage from './pages/Reports';
import SaleReport from './pages/Reports/SaleReport';
import PurchaseReport from './pages/Reports/Purchase/PurchaseReport';
import DayBook from './pages/Reports/DayBook/DayBook';
        
function App() {
  return (
    // <EmployeePage isUpdate={true} />
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='login' element={<Login/>} />
          <Route path='forgot-password' element={<ForgotPassword/>} />
          <Route path='setting' element={<SettingPage/>} />
          <Route path='product' element={<ProductHome/>} />
          <Route index element={<ProductHome/>} />
          <Route path='product/add' element={<ProductPage isUpdate={false} />} />
          <Route path='product/update' element={<ProductPage isUpdate={true} />} />
          <Route path='product/stock' element={<StockPage />} />
          <Route path='supplier' element={<SupplierHome/>} />
          <Route path='supplier/add' element={<SupplierPage isUpdate={false} />} />
          <Route path='supplier/update' element={<SupplierPage isUpdate={true} />} />
          <Route path='customer/add' element={<CustomerPage isUpdate={false} />} />
          <Route path='customer/update' element={<CustomerPage isUpdate={true} />} />
          <Route path='employee/add' element={<EmployeePage isUpdate={false} />} />
          <Route path='employee/update' element={<EmployeePage isUpdate={true} />} />
          <Route path='report' element={<ReportsPage/>} />
          <Route path='report/sale' element={<SaleReport/>} />
          <Route path='report/purchase' element={<PurchaseReport/>} />
          <Route path='report/day-book' element={<DayBook/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
