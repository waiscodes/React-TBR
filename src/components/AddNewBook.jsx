import React from "react";
import { connect } from "react-redux";

const AddNewBook = (props) => {
  const AddTBR = (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value,
      author = document.querySelector("#author").value,
      genre = document.querySelector("#genre").value;

    alert(genre);
  };

  return (
    <>
      <form onSubmit={AddTBR}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter the Title"
        />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Enter the Author"
        />

        <label htmlFor="genre">Genre</label>
        <select name="genre" id="genre">
          <option value="fantasy">Fantasy</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="non-finction">Non-Fiction</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default connect((state) => ({
  library: state.library,
}))(AddNewBook);
