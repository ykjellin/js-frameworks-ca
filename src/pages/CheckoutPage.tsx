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

const RemoveButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    background: #c82333;
  }
`;

const ClearCartButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const CheckoutPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();
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
    clearCart();
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
                <RemoveButton onClick={() => removeFromCart(product.id)}>
                  Remove
                </RemoveButton>
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
          <ClearCartButton onClick={clearCart}>Clear Cart</ClearCartButton>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </CheckoutContainer>
  );
};

export default CheckoutPage;
