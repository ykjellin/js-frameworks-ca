// This project is licensed under the MIT License - see the LICENSE file for details

import React, { useState } from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

const FormWrapper = styled.div`
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #007bff;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 0.9rem;
  margin: -1rem 0 1rem 0;
`;

const RequiredMark = styled.span`
  color: red;
  margin-left: 0.2rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters.";
      isValid = false;
    } else {
      newErrors.fullName = "";
    }

    if (formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
      isValid = false;
    } else {
      newErrors.subject = "";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (formData.body.length < 3) {
      newErrors.body = "Message must be at least 3 characters.";
      isValid = false;
    } else {
      newErrors.body = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      alert("Form submitted successfully!");
      setFormData({ fullName: "", subject: "", email: "", body: "" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ContactContainer>
      <FormWrapper>
        <h1>Contact Us</h1>
        <Form onSubmit={handleSubmit}>
          <Label>
            Full Name <RequiredMark>*</RequiredMark>
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <Error>{errors.fullName}</Error>}
          </Label>

          <Label>
            Subject <RequiredMark>*</RequiredMark>
            <Input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <Error>{errors.subject}</Error>}
          </Label>

          <Label>
            Email <RequiredMark>*</RequiredMark>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <Error>{errors.email}</Error>}
          </Label>

          <Label>
            Message <RequiredMark>*</RequiredMark>
            <TextArea
              name="body"
              value={formData.body}
              onChange={handleChange}
            />
            {errors.body && <Error>{errors.body}</Error>}
          </Label>

          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormWrapper>
    </ContactContainer>
  );
};

export default ContactPage;
