import { useState } from "react";
import {
  Increment,
  Decrement,
  Reset,
  IncrementByPayload,
} from "../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const CounterApp = () => {
  let [state, setState] = useState("");
  let count = useSelector(state => state.count);
  let dispatch = useDispatch();

  let addValue = Number(state || 0);

  return (
    <div>
      <h1>{count}</h1>
      <div className="form-group">
        <input
          type="text"
          value={state}
          onChange={e => setState(e.target.value)}
        />
        <button onClick={() => dispatch(IncrementByPayload(addValue))}>
          Add Value
        </button>
      </div>
      <div className="btn-group">
        <button onClick={() => dispatch(Increment())}>Increment</button>
        <button onClick={() => dispatch(Decrement())}>Decrement</button>
        <button onClick={() => dispatch(Reset())}>Reset</button>
      </div>
    </div>
  );
};

export default CounterApp;
