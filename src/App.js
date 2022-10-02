import React from "react";
import { incNumber, decNumber } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";

function App(props) {
  const mystate = useSelector((state) => state.countReducers);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>Increment/Decrement Counter App</h1>
      <p>Using React and Redux</p>
      <div className="counter-block">
        <button onClick={() => dispatch(decNumber())}>-</button>
        <p className="counter">{mystate.count}</p>
        <button onClick={() => dispatch(incNumber())}>+</button>
      </div>
    </div>
  );
}

export default App;
