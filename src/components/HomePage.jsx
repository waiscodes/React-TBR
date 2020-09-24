import React from "react";
import { connect } from "react-redux";

const HomePage = () => {
  const SearchEvent = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={SearchEvent}>
        <label htmlFor="searchbar">Search Bar</label>
        <input type="search" name="searchbar" id="searchbar" />
      </form>
      <h2>This is the HomePage</h2>
    </>
  );
};

export default connect()(HomePage);
