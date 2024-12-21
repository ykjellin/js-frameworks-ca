import React from "react";
import styled from "styled-components";

interface StatusMessageProps {
  message: string;
  type: "loading" | "error";
}

const Message = styled.p<{ type: "loading" | "error" }>`
  font-size: 1.2rem;
  color: ${({ type }) => (type === "error" ? "red" : "blue")};
  text-align: center;
  margin: 2rem 0;
`;

const StatusMessage: React.FC<StatusMessageProps> = ({ message, type }) => {
  return <Message type={type}>{message}</Message>;
};

export default StatusMessage;
