import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ThemeDashBoard from "../pages/ThemeDashBoard";

function ThemeNavigationBar() {
  const inputRefLandingPage = useRef();
  useEffect(() => {
    inputRefLandingPage.current.focus();
  }, []);

  const [isMoved, setMoved] = useState(false);
  const handleMouseEnter = () => {
    setMoved(!isMoved);
  };
  // function             parameter
  const handleMouseLeave = () => {
    //Execution
    setMoved(!isMoved);
  };

  const backgroundContainer = {
    backgroundImage: `url("https://media3.giphy.com/media/coxQHKASG60HrHtvkt/giphy.gif")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyConten: "center",
  };

  const startButtonStyle = {
    position: "absolute",
    left: "75%",
    bottom: "25vh",
    outline: "4px solid black",
    backgroundColor: isMoved ? "red" : "gray",
  };

  return (
    <>
      <div style={backgroundContainer}>
        <Helmet>
          <title>Landing Page</title>
        </Helmet>
        <Link to={"/DashBoard"}>
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="btn animate__animated animate__wobble animate__infinite"
            style={startButtonStyle}
            ref={inputRefLandingPage}
          >
            <h4>CLICK THE START BUTTON</h4>
          </button>
        </Link>
      </div>
    </>
  );
}

export default ThemeNavigationBar;
