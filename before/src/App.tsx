import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// BASELINE VERSION: Static imports - ALL code loaded upfront (BAD!)
import Login from './pages/Login';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/" element={<Navigate to="/products" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
