import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
`;
export default function Home() {
  let [data, setData] = React.useState([
    "Harsh Gajera",
    "harsh.gajera17@gmail.com",
    "harsh_gajera",
    "7046581170",
    "just common man",
  ]);
  fetch(
    "https://cors-anywhere.herokuapp.com/https://masai-api-mocker.herokuapp.com/user/masai-school",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      // body: JSON.stringify(options),
    }
  )
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <section id="home">
      <h1>This is Home Page of Website.</h1>
      <h1>Go to All Products Page to See All Products.</h1>
      <h1>Click on Any Product to See Details of that Particular Product.</h1>

      <h1>Your Profile:</h1>
      <h2>Name: {data[0]}</h2>
      <h2>Email: {data[1]}</h2>
      <h2>Username: {data[2]}</h2>
      <h2>Mobile No: {data[3]}</h2>
      <h2>Description: {data[4]}</h2>
      <button>
        <StyledLink to={`/products`}>Go To Products Page</StyledLink>
      </button>
    </section>
  );
}
