import React from "react";
import "../css/ProfilePage.css";

const Profile = () => {
  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <p>Full Name</p>
        <input type="text" name="name" id="name" />

        <label htmlFor="username">Username</label>
        <p>UserName</p>
        <input type="text" name="username" id="username" />

        <label htmlFor="email">Email</label>
        <p>Email</p>
        <input type="password" name="password" id="password" />

        <label htmlFor="password">Password</label>
        <p>Password</p>
        <input type="password" name="password" id="password" />

        <input type="submit" value="Sumbit" />
      </form>
    </>
  );
};

export default Profile;
