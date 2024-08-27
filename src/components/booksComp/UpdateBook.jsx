import { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleBookApi, updateBookApi } from "./../../redux/books/bookSlice";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateBook = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { data, status } = useSelector((state) => state.book);

  let [state, setState] = useState({
    title: "",
    author: "",
    id: "",
  });
  const [toastShown, setToastShown] = useState(false);
  let { title, author } = state;

  const isFormDirty = title !== data.title || author !== data.author;

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
    if (!isFormDirty) {
      if (!toastShown) {
        toast.info("No changes made to update.");
        setToastShown(true);
        let timer;
        timer = setTimeout(() => {
          setToastShown(false);
        }, 3000);
        () => clearTimeout(timer);
      }

      return;
    }
    dispatch(updateBookApi(state)).then(() => {
      navigate("/all-books");
    });
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
                <button type="submit">Update book</button>
              </div>
            </form>
          </Fragment>
        )}
      </div>
    </>
  );
};

export default UpdateBook;
