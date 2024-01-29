import React from "react";

const CountComponents = ({ count, handleIncriment, handleDecriment }) => {
  return (
    <div>
      <h1>Count:{count}</h1>
      <button className="btn btn-danger" onClick={handleIncriment}>
        Incriment
      </button>
      <button className="btn btn-success" onClick={handleDecriment}>
        Decriment
      </button>
    </div>
  );
};

export default CountComponents;
