// This project is licensed under the MIT License - see the LICENSE file for details

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
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
  color: ${(props) => props.theme.colors.secondary};
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
  color: ${(props) => props.theme.colors.secondary};
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <StyledLink to="/about">About Us</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </FooterLinks>
      <Copyright>
        &copy; {new Date().getFullYear()} Crabstore. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
