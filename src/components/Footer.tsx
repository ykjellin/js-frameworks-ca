import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  padding: 1.5rem 2rem;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1rem;

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }

  &:hover {
    color: lightgray;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #cccccc;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <StyledLink to="/about">About Us</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </FooterLinks>
      <Copyright>
        &copy; {new Date().getFullYear()} Placeholder. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
