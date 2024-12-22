// This project is licensed under the MIT License - see the LICENSE file for details

import React from "react";
import styled from "styled-components";
import { useCart, Product } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  max-width: 800px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium} 0;
  border-bottom: ${({ theme }) => theme.border.light};

  span:nth-child(1) {
    flex: 2;
  }
  span:nth-child(2) {
    flex: 1;
    text-align: right;
  }
  button {
    margin-left: ${({ theme }) => theme.spacing.small};
  }
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: ${({ theme }) => theme.spacing.large};
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.button};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

const RemoveButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.small}
    ${({ theme }) => theme.spacing.medium};
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: ${({ theme }) => theme.spacing.small};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    color: white;
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
