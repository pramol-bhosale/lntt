import logo from './logo.svg';
import './App.css';
import BaseTemplate from './Layout/BaseTemplate';
import ProductPage from './pages/Product';

function App() {
  return (
    <BaseTemplate>
      <ProductPage />
    </BaseTemplate>
  );
}

export default App;
