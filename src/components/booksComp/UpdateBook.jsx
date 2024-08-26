import { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleBookApi, updateBookApi } from "./../../redux/books/bookSlice";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBook = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { data, error, status } = useSelector((state) => state.book);

  let [state, setState] = useState({
    title: "",
    author: "",
    id: "",
  });
  let { title, author } = state;

  let handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useLayoutEffect(() => {
    dispatch(singleBookApi(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (data) {
      setState(data);
    }
  }, [data]);

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBookApi(state)).then(() => {
      navigate("/all-books");
    });
  };

  return (
    <div className="main-container">
      {status ? (
        "loading..."
      ) : (
        <Fragment>
          <h1>Update Book</h1>
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
              <button>Update book</button>
            </div>
          </form>
        </Fragment>
      )}
    </div>
  );
};

export default UpdateBook;
