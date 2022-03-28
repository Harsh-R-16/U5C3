import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { data } from "./data";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
`;

export default function Products() {
  let [products, setProducts] = useState(data);
  useEffect(() => {
    setProducts(data);
  });
  return (
    <>
      <h1>All Products</h1>
      <section id="products">
        {products.map(({ image, name, price, company, id }, index) => {
          return (
            <div key={id}>
              <img src={image} alt="" />
              <h2>Name: {name}</h2>
              <h2>Company: {company}</h2>
              <h3>Price: {price}$</h3>
              <button>
                <StyledLink to={`/products/${index}`}>More Details</StyledLink>
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
}
