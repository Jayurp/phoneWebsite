import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage'; // Import new page
import { pageData } from './data/data';

function App() {
  const products = pageData.pages.filter(page => page.path.startsWith('/products-'));

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {products.map((product, index) => (
              <Route
                key={index}
                path={product.path}
                element={<ProductPage pageContent={product.content} />}
              />
            ))}
            {/* New route for product detail page */}
            <Route path="/product-detail/:productId" element={<ProductDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;