import React from "react";
import {useState} from "react";

const Login = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = useState("");

  const [myForm, setMyForm] = useState({ User1: 1, pass1: 2 });

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();

    console.log({ myForm });
  };

  return (
    <form onSubmit={submitForm}>
        <h1>Login</h1>
      <label htmlFor="userName"> Username</label>
      <input
        name="userName"
        onChange={(event) => setUserName(event.target.value)}
      ></input><br/>
      <label htmlFor="password">Password</label>
      <input
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input><br/>
      <button>Submit</button>
    </form>
  );
};

export default Login;