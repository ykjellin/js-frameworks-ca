import React, { useState } from "react";
import styled from "styled-components";

// Scoped styles for the ContactForm
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const ContactInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: 1rem;
  border: ${({ theme }) => theme.border.light};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const ContactTextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: 1rem;
  border: ${({ theme }) => theme.border.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  min-height: 150px;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.medium};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

const Error = styled.p`
  color: red;
  font-size: 0.9rem;
  margin: ${({ theme }) => theme.spacing.small} 0 0 0;
`;

const RequiredMark = styled.span`
  color: red;
  margin-left: ${({ theme }) => theme.spacing.small};
  font-size: 1.2rem;
  font-weight: bold;
`;

const ContactForm: React.FC = () => {
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
      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
      setFormData({ fullName: "", subject: "", email: "", body: "" });
      setErrors({ fullName: "", subject: "", email: "", body: "" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Full Name <RequiredMark>*</RequiredMark>
        <ContactInput
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <Error>{errors.fullName}</Error>}
      </Label>

      <Label>
        Subject <RequiredMark>*</RequiredMark>
        <ContactInput
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        {errors.subject && <Error>{errors.subject}</Error>}
      </Label>

      <Label>
        Email <RequiredMark>*</RequiredMark>
        <ContactInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <Error>{errors.email}</Error>}
      </Label>

      <Label>
        Message <RequiredMark>*</RequiredMark>
        <ContactTextArea
          name="body"
          value={formData.body}
          onChange={handleChange}
        />
        {errors.body && <Error>{errors.body}</Error>}
      </Label>

      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};

export default ContactForm;
