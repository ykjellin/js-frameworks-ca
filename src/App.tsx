import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import ContactPage from "./pages/ContactPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
