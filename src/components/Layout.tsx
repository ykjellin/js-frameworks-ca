// This project is licensed under the MIT License - see the LICENSE file for details

import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PageContainer>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </PageContainer>
  );
};

export default Layout;
