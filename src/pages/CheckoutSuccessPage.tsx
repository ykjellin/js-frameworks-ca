// This project is licensed under the MIT License - see the LICENSE file for details

import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

const SuccessMessage = styled.h1`
  color: #28a745;
  margin-bottom: 1.5rem;
`;

const BackToStore = styled(Link)`
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.2rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const CheckoutSuccessPage: React.FC = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <SuccessContainer>
      <SuccessMessage>Your order was successful!</SuccessMessage>
      <p>Thank you for shopping with us.</p>
      <BackToStore to="/">Back to Store</BackToStore>
    </SuccessContainer>
  );
};

export default CheckoutSuccessPage;
