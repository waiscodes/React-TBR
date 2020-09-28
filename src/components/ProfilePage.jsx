import React from "react";

const Profile = () => {
  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />

        <label htmlFor="email">Email</label>
        <input type="password" name="password" id="password" />

        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" />

        <input type="submit" value="Sumbit" />
      </form>
    </>
  );
};
