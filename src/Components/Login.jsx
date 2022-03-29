import React from "react";

export default function Login() {
  const formHandler = (e) => {
    e.preventDefault();

    let options = {
      password: e.target.elements[2].value,
      username: e.target.elements[1].value,
    };
    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
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
          alert(res.message, "Please try again");
        } else {
          console.log(options);
          alert("Login Success", res.token);
          localStorage.setItem("token", res.token);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
        e.target.elements[0].value = "";
        e.target.elements[1].value = "";
        e.target.elements[2].value = "";
      });
  };
  return (
    <section id="login">
      <form action="" onSubmit={formHandler}>
        <div>
          <label htmlFor="name">Enter Your Name:</label>
          <input
            type="text"
            id="name"
            required
            placeholder="enter your name..."
          />
        </div>
        <div>
          <label htmlFor="username">Enter Your Username:</label>
          <input
            type="text"
            id="username"
            required
            placeholder="enter your username..."
          />
        </div>
        <div>
          <label htmlFor="password">Enter Your Password:</label>
          <input
            type="password"
            id="password"
            required
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
