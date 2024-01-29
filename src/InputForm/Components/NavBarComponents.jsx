// NavbarComponents.jsx
import React from "react";
import style from "./NavbarComponents.module.css";
import "animate.css/animate.min.css"; // Import animate.css library

function NavBarComponents() {
  return (
    <>
      <nav className={style.navbar}>
        <div className={`${style.logo} animate__animated animate__zoomInUp `}>
          <h2>LOGO</h2>
        </div>
        <ul
          className={`${style["navbar-item"]} animate__animated animate__lightSpeedInRight`}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBarComponents;
