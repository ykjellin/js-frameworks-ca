import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import ContactPage from "./pages/ContactPage";
import { CartProvider } from "./context/CartContext";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .Wrapper___1kRcF, input, .SearchInput {
    position: relative !important; 
    z-index: 1 !important; 
  }

  ul.NavMenu {
    position: fixed !important;
    top: 50px;
    right: 0;
    z-index: 9999 !important;
    transform: translateY(0) !important;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <HomePage />
                </Layout>
              }
            />
            <Route
              path="/product/:id"
              element={
                <Layout>
                  <ProductPage />
                </Layout>
              }
            />
            <Route
              path="/checkout"
              element={
                <Layout>
                  <CheckoutPage />
                </Layout>
              }
            />
            <Route
              path="/checkout-success"
              element={
                <Layout>
                  <CheckoutSuccessPage />
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout>
                  <ContactPage />
                </Layout>
              }
            />
            <Route
              path="*"
              element={
                <Layout>
                  <h2>404 - Page Not Found</h2>
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
