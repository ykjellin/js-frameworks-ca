// This project is licensed under the MIT License - see the LICENSE file for details

import React, { useState } from "react";
import styled from "styled-components";
import MenuPortal from "./MenuPortal";

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  z-index: 9999;
`;

const HamburgerIcon = styled.div<{ isOpen: boolean }>`
  width: 30px;
  height: 3px;
  background: white;
  margin: 5px 0;
  transition: all 0.3s ease-in-out;

  &:nth-child(1) {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg) translateY(8px)" : "none"};
  }

  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg) translateY(-8px)" : "none"};
  }
`;

const NavMenu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  background: #282c34;
  position: fixed;
  top: 50px;
  right: 0;
  width: 200px;
  padding: 1rem;
  border-radius: 8px;
  list-style: none;
  z-index: 9999;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-200%)"};
  transition: transform 0.3s ease-in-out;

  li {
    margin: 1rem 0;
    text-align: center;

    a {
      text-decoration: none;
      color: white;
      font-size: 1.2rem;

      &:hover {
        color: lightgray;
      }
    }
  }
`;

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div onClick={toggleMenu}>
        <HamburgerIcon isOpen={isOpen} />
        <HamburgerIcon isOpen={isOpen} />
        <HamburgerIcon isOpen={isOpen} />
      </div>

      {isOpen && (
        <MenuPortal>
          <MenuContainer>
            <NavMenu isOpen={isOpen}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </NavMenu>
          </MenuContainer>
        </MenuPortal>
      )}
    </>
  );
};

export default HamburgerMenu;
