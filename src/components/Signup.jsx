import React from "react";
import { connect } from "react-redux";
import "../css/Signup.css";

const Signup = () => {
  const SumbitHandler = (e) => {
    e.preventDefault();

    const usrName = document.querySelector("#name").value;
    console.log(usrName);
    const usrEmail = document.querySelector("#email").value;
    console.log(usrEmail);
    const usrPassword = document.querySelector("#password").value;
    console.log(usrPassword);
  };
  return (
    <>
      <form onSubmit={SumbitHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />

        <input type="submit" value="Signup" />
      </form>
    </>
  );
};

export default connect((state) => ({ store: state }))(Signup);
