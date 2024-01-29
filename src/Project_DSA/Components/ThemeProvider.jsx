import React from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeProvider = ({ children }) => {
  return (
    <>
      <ThemeContext.Provider>{children}</ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
