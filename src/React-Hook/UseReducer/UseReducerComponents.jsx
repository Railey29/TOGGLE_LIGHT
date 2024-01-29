import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

function UseReducerComponents() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncriment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <>
      <div>
        <h2>Count: {state.count}</h2>
      </div>
      <button className="btn btn-primary" onClick={handleIncriment}>
        Increment
      </button>
      <button className="btn btn-danger" onClick={handleDecrement}>
        Decrement
      </button>
      <button className="btn btn-primary" onClick={handleReset}>
        Reset
      </button>
    </>
  );
}

export default UseReducerComponents;
