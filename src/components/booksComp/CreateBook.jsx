import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBookApi } from "./../../redux/books/bookSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    if (title.trim() && author.trim()) {
      dispatch(createBookApi(state));
      navigate("/all-books");
    } else {
      toast.error("Both title and author are required!");
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        closeOnClick
        pauseOnHover
        theme="colored"
      />

      <div className="main-container">
        <h1>Create Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
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
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={author}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit">Create Book</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateBook;
