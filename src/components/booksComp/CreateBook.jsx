import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBookApi } from "./../../redux/books/bookSlice";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [state, setState] = useState({
    title: "",
    author: "",
  });
  let { title, author } = state;
  let handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBookApi(state));
    navigate("/all-books");
  };
  return (
    <div className="main-container">
      <h1>Create Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">author</label>
          <input
            type="author"
            className="form-control"
            id="author"
            name="author"
            value={author}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <button>create book</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBook;
