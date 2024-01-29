// App.jsx
import React from "react";
import { Helmet } from "react-helmet";
import ThemeToggle from "./DarkModeLightMode/Components/ThemeToggle";

function App() {
  return (
    <>
      <Helmet>
        <title>LightMode & DarkMode</title>
      </Helmet>
      <ThemeToggle />
    </>
  );
}

export default App;
