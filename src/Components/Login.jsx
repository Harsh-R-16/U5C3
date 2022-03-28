import React from "react";

export default function Login() {
  const formHandler = (e) => {
    e.preventDefault();

    let name = localStorage.getItem("name");
    let pass = localStorage.getItem("password");
    let n = e.target.elements[0].value;
    let p = e.target.elements[2].value;
    if (n === name && p === pass) alert("Login Successful !!!!!!");
    else alert("Wrong Name or Password !!!!!");
    for (let i = 0; i < 3; i++) e.target.elements[i].value = "";
  };
  return (
    <section id="login">
      <form action="" onSubmit={formHandler}>
        <div>
          <label htmlFor="username">Enter Your Name:</label>
          <input type="text" id="name" placeholder="enter your name..." />
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
          <button>Sign In</button>
        </div>
      </form>
    </section>
  );
}
