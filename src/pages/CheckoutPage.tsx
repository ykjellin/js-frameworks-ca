// This project is licensed under the MIT License - see the LICENSE file for details

import React from "react";
import styled from "styled-components";
import { useCart, Product } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 2rem;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const CheckoutPage: React.FC = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cart
      .reduce(
        (total: number, product: Product) => total + product.discountedPrice,
        0
      )
      .toFixed(2);
  };

  const handleCheckout = () => {
    navigate("/checkout-success");
  };

  return (
    <CheckoutContainer>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <>
          <ProductList>
            {cart.map((product) => (
              <ProductItem key={product.id}>
                <span>{product.title}</span>
                <span>${product.discountedPrice.toFixed(2)}</span>
              </ProductItem>
            ))}
          </ProductList>

          <TotalContainer>
            <span>Total:</span>
            <span>${getTotalPrice()}</span>
          </TotalContainer>

          <CheckoutButton onClick={handleCheckout}>
            Proceed to Checkout
          </CheckoutButton>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </CheckoutContainer>
  );
};

export default CheckoutPage;
