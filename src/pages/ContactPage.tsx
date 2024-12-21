import React from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.background};
`;

const ContactPage: React.FC = () => {
  return (
    <ContactContainer>
      <div style={{ maxWidth: "600px", width: "100%" }}>
        <h1>Contact Us</h1>
        <ContactForm />
      </div>
    </ContactContainer>
  );
};

export default ContactPage;
