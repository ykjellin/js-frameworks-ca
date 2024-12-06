import React from "react";
import styled from "styled-components";
import Cart from "./Cart";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #282c34;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Header: React.FC = () => {
  const cartItemCount = 3; //Will be replaced later

  return (
    <HeaderContainer>
      <h1>My Website</h1>
      <CartWrapper>
        <Nav>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
        <Cart itemCount={cartItemCount} />
      </CartWrapper>
    </HeaderContainer>
  );
};

export default Header;
