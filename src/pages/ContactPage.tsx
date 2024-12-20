// This project is licensed under the MIT License - see the LICENSE file for details

import React from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 2rem;
`;

const FormWrapper = styled.div`
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ContactPage: React.FC = () => {
  return (
    <ContactContainer>
      <FormWrapper>
        <h1>Contact Us</h1>
        <ContactForm />
      </FormWrapper>
    </ContactContainer>
  );
};

export default ContactPage;
