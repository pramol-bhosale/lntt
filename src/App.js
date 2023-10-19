import logo from './logo.svg';
import './App.css';
import BaseTemplate from './Layout/BaseTemplate';
import ProductPage from './pages/Product';
import StockPage from './pages/Stock';

function App() {
  return (
    <BaseTemplate>
      <StockPage />
    </BaseTemplate>
  );
}

export default App;
