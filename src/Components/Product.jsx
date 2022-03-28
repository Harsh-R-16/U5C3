import React from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "./data";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
`;
export default function Product() {
  let { id } = useParams();
  console.log(data[+id].colors);
  return (
    <section id="single">
      <img src={data[+id].image} alt="" />
      <h1>Product Name: {data[+id].name}</h1>
      <h2>Company Name: {data[+id].company}</h2>
      <h2>Category: {data[+id].category}</h2>
      <h3>Product ID: {data[+id].id}</h3>
      <p>
        <span>Description:</span> {data[+id].description}
      </p>
      <div>
        Colors:
        {data[+id].colors.map((i) => (
          <p style={{ backgroundColor: `${i}` }}></p>
        ))}
      </div>
      <button>
        <StyledLink to={`/products`}>Go To Products Page</StyledLink>
      </button>
    </section>
  );
}
