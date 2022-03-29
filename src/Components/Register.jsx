import React from "react";

export default function Register() {
  const formHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("name", e.target.elements[0].value);
    localStorage.setItem("email", e.target.elements[1].value);
    localStorage.setItem("password", e.target.elements[2].value);
    for (let i = 0; i < 6; i++) e.target.elements[i].value = "";
    let options = {
      name: e.target.elements[0].value,
      email: e.target.elements[1].value,
      password: e.target.elements[2].value,
      username: e.target.elements[3].value,
      mobile: e.target.elements[4].value,
      description: e.target.elements[5].value,
    };
    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          alert("Registration failed, user already exists. Please try again");
        } else {
          alert("Registration Success");
        }
      });
  };
  return (
    <section id="login">
      <form action="" onSubmit={formHandler}>
        <div>
          <label htmlFor="Name">Enter Your Name:</label>
          <input type="text" id="Name" placeholder="enter your name..." />
        </div>
        <div>
          <label htmlFor="Email">Enter Your Email:</label>
          <input type="email" id="Email" placeholder="enter your email..." />
        </div>
        <div>
          <label htmlFor="password">Enter Your Password:</label>
          <input
            type="text"
            id="password"
            placeholder="enter your password..."
          />
        </div>
        <div>
          <label htmlFor="username">Enter Your Username:</label>
          <input
            type="text"
            id="username"
            placeholder="enter your username..."
          />
        </div>
        <div>
          <label htmlFor="number">Enter Your Mobile Number:</label>
          <input type="text" id="number" placeholder="enter your number..." />
        </div>
        <div>
          <label htmlFor="desc">Enter Your Description:</label>

          <textarea
            name=""
            id="desc"
            cols="30"
            rows="10"
            placeholder="enter your desc..."
          ></textarea>
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}
