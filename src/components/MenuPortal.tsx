// This project is licensed under the MIT License - see the LICENSE file for details

import React from "react";
import ReactDOM from "react-dom";

interface MenuPortalProps {
  children: React.ReactNode;
}

const MenuPortal: React.FC<MenuPortalProps> = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};

export default MenuPortal;
