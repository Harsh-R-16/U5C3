import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
`;
export default function Home() {
  return (
    <section id="home">
      <h1>This is Home Page of Website.</h1>
      <h1>Go to All Products Page to See All Products.</h1>
      <h1>Click on Any Product to See Details of that Particular Product.</h1>
      <button>
        <StyledLink to={`/products`}>Go To Products Page</StyledLink>
      </button>
    </section>
  );
}
