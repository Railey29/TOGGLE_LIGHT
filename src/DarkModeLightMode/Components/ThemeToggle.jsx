import React, { useState } from "react";
import style from "./styling.module.css";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
function ThemeToggle() {
  const [theme, setTheme] = useState(false);
  const [theme1, setTheme1] = useState(false);
  const [Clicked, setClicked] = useState(false);

  // setIcon Light
  const itemLeaveLight = <MdOutlineWbSunny />;
  const itemOnMouseLight = <MdSunny />;

  // setIcon Dark
  const itemLeaveDark = <FaRegMoon />;
  const itemOnMoutDark = <FaMoon />;

  // Condition of Hover on onMouse
  const itemToShowLight = theme ? itemOnMouseLight : itemLeaveLight;
  const itemToShowDark = theme1 ? itemOnMoutDark : itemLeaveDark;

  const itemFinalBackground = Clicked ? "#1c1b1a" : "#bfbcb4";

  return (
    <>
      <h1 className={style.title}>Light Mode & Dark Mode</h1>
      <div
        className={style.Container}
        style={{
          backgroundColor: itemFinalBackground,
        }}
      >
        <div className={style.positionMode}>
          <button
            className={style.lightmode}
            onMouseEnter={() => setTheme(true)}
            onMouseLeave={() => setTheme(false)}
            onClick={() => {
              setClicked(false);
            }}
          >
            {itemToShowLight}
          </button>

          <button
            className={style.darkmode}
            onMouseEnter={() => setTheme1(true)}
            onMouseLeave={() => setTheme1(false)}
            onClick={() => {
              setClicked(!Clicked);
            }}
          >
            {itemToShowDark}
          </button>
        </div>
      </div>
    </>
  );
}

export default ThemeToggle;
