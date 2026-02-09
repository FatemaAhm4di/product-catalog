import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ProductsLayout from './pages/ProductsLayout';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsLayout />}>
          <Route index element={<ProductList />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;