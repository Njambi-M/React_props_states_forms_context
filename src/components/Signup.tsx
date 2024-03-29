import React from "react";
import {useState} from "react";
import {useEffect} from "react";


const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");


  const [myForm, setMyForm] = useState({ bla: 1, hello: 2 });

  const saveFields = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMyForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    console.log(myForm);
  }, [myForm]);

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();

    console.log({ myForm });
  };

  return (
    <form onSubmit={submitForm}>
        <h1>Sign up</h1>
      <label htmlFor="firstName">First name</label>
      <input
        name="firstName"
        onChange={saveFields}
      ></input><br/>
      <label htmlFor="lastName">Last name</label>
      <input
        name="lastName"
        onChange={saveFields}
      ></input><br/>
      <label htmlFor="email">Email address</label>
      <input
        name="email"
        onChange={saveFields}
      ></input><br/>
      <label htmlFor="pass">Password</label>
      <input
        name="pass"
        type = "password"
        onChange={saveFields}
      ></input><br/>
      <button>Submit</button>
    </form>
  );
};

export default Signup;