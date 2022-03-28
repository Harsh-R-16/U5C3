import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 20px;
  color: white;
  font-size: 20px;
`;

export default function Navbar() {
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/products">Products</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/register">Register</StyledLink>
    </nav>
  );
}
