import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ConterContainer(props) {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increase Counter
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrease Counter
      </button>
    </div>
  );
}

export default ConterContainer;
