import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListPage from 'pages/ProductListPage';
import ProductDetailsPage from 'pages/ProductDetailsPage';
import NewProductPage from 'pages/NewProductPage';

const AppRouter: React.FC = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/products/new" element={<NewProductPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Router>
    </main>
  );
};

export default AppRouter;
