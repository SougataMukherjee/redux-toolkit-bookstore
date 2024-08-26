import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/authSlice";

const Register = () => {
  let dispatch = useDispatch();

  let [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });
  let { username, email, password } = state;
  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    dispatch(registerThunk(state));
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button>register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
