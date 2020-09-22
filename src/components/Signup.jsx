import React from "react";

const Signup = () => {
  const SumbitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={SumbitHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" />

        <label htmlFor="password"></label>
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

export default Signup;
