import { useDispatch, useSelector } from "react-redux";
import {
  FetchAllPosts,
  addPost,
  deletePost,
} from "../../redux/posts/postSlice";
import { Fragment, useState } from "react";

const AllPosts = () => {
  let posts = useSelector(FetchAllPosts);
  let dispatch = useDispatch();

  let [state, setState] = useState({
    title: "",
    body: "",
  });

  let { title, body } = state;

  let handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addPost({ id: nanoid(), title, body }));
    //   with prepare callback way

    dispatch(addPost(title, body));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="enter title"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">body</label>
          <input
            type="text"
            name="body"
            value={body}
            placeholder="enter body"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button>add post</button>
        </div>
      </form>
      {posts?.map((post) => {
        return (
          <Fragment key={post.id}>
            <h1>{post.title.toUpperCase()}</h1>
            <p>{post.body.slice(0, 100)}</p>
            <button onClick={() => dispatch(deletePost({ id: post.id }))}>
              delete
            </button>
          </Fragment>
        );
      })}
    </div>
  );
};

export default AllPosts;
