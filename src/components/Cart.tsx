// This project is licensed under the MIT License - see the LICENSE file for details

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.div`
  font-size: 1.5rem;
`;

const ItemCountOverlay = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 50%;
  padding: 0.2rem 0.4rem;
`;

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <CartContainer onClick={() => navigate("/cart")}>
      <Icon>🛒</Icon>
      {cart.length > 0 && <ItemCountOverlay>{cart.length}</ItemCountOverlay>}
    </CartContainer>
  );
};

export default Cart;
