import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './components/HomePage';
import CompanyInfo from './components/CompanyInfo';
import Business from './components/Business';
import Products from './components/Products';
import Careers from './components/Careers';

export default function App() {
  return (
    <Router basename='/figma-make-sample2'>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyInfo />} />
          <Route path="/business" element={<Business />} />
          <Route path="/products" element={<Products />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </Layout>
    </Router>
  );
}