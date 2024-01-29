import React, { useState } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const counting = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, count, counting }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
