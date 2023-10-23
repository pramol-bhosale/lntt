import logo from './logo.svg';
import './App.css';
import BaseTemplate from './Layout/BaseTemplate';
import ProductPage from './pages/Product';
import StockPage from './pages/Stock';
import SupplierPage from './pages/Supplier';

function App() {
  return (
      <SupplierPage isUpdate={true} />
  //   <BrowserRouter>
  //   <Routes>
  //      <Route path='/product/add' Component={<ProductPage isUpdate={false}/>}/>
  //      <Route path='/product/update' Component={<ProductPage isUpdate={true}/>}/>
  //      <Route path='/product/stock' Component={<StockPage/>}/>
  //      <Route path='/supplier/add' Component={<SupplierPage isUpdate={false}/>}/>
  //      <Route path='/supplier/update' Component={<SupplierPage isUpdate={true}/>}/>
  //   </Routes>
  //  </BrowserRouter>
   
  );
}

export default App;
