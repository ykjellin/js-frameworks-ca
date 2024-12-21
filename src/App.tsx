import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import ContactPage from "./pages/ContactPage";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import GlobalStyle from "./theme/globalStyle";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;
