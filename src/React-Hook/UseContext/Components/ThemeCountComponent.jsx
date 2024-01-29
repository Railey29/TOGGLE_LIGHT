import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemeCountComponent() {
  const { count, counting } = useContext(ThemeContext);
  return (
    <div>
      <h1>Countings: {count}</h1>
      <button onClick={counting}>Click this to start to count</button>
    </div>
  );
}

export default ThemeCountComponent;
