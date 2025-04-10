// This project is licensed under the MIT License - see the LICENSE file for details

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Cart from "./Cart";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  position: relative;
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) => props.theme.colors.secondary};
  margin-right: auto;
`;

const StyledNav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  gap: 1.5rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    background: #282c34;
    position: absolute;
    top: 60px;
    right: 2rem;
    padding: 1rem;
    border-radius: 8px;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.5rem;

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }

  &:hover {
    color: lightgray;
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-left: auto;
`;

const HamburgerIcon = styled.div<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  color: ${(props) => props.theme.colors.secondary};

  div {
    width: 25px;
    height: 3px;
    background: ${(props) => props.theme.colors.secondary};
    margin: 4px 0;
    transition: 0.4s;
  }

  @media (max-width: 768px) {
    display: flex;

    div:nth-child(1) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(45deg) translateY(6px)" : "none"};
    }

    div:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
    }

    div:nth-child(3) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(-45deg) translateY(-6px)" : "none"};
    }
  }
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <HeaderContainer>
      <Title>Crabstore</Title>

      <StyledNav $isOpen={isOpen}>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </StyledNav>

      <ActionsWrapper>
        <Cart />
        <HamburgerIcon $isOpen={isOpen} onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </HamburgerIcon>
      </ActionsWrapper>
    </HeaderContainer>
  );
};

export default Header;
