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
      <ul>
        Feed UL
        {/* This is a UL that the feed will go on. It will be updated via state, and
        it'll most likely contain book recommendations, blogs, articles etc. */}
      </ul>
    </>
  );
};

export default connect()(HomePage);
