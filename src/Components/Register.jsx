import React from "react";

export default function Login() {
  const formHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("name", e.target.elements[0].value);
    localStorage.setItem("email", e.target.elements[1].value);
    localStorage.setItem("password", e.target.elements[2].value);
    for (let i = 0; i < 6; i++) e.target.elements[i].value = "";
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
