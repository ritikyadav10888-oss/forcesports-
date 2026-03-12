import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/Home/HomePage';
import ProductPage from './pages/Products/ProductPage';
import UniformsPage from './pages/Uniforms/UniformsPage';
import AboutPage from './pages/About/AboutPage';
import InquiryPage from './pages/Inquiry/InquiryPage';
import ManufacturingPage from './pages/Manufacturing/ManufacturingPage';
import ProductDetailPage from './pages/Products/ProductDetailPage';
import CatalogPage from './pages/Catalog/CatalogPage';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/products/:productId" element={<ProductDetailPage />} />
                    <Route path="/uniforms" element={<UniformsPage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/manufacturing" element={<ManufacturingPage />} />
                    <Route path="/inquiry" element={<InquiryPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
