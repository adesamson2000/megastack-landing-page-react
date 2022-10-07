import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ active }) {
  const [hamburger, setHamburger] = useState(false);

  function togglehamburger() {
    setHamburger(!hamburger);
  }
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <Link to={"/"}>
          <img src="/images/navbar-icon.svg" alt="navbar-icon" />
        </Link>

        <div onClick={togglehamburger} className="hamburger-container">
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13.5H17H1ZM1 1.5H17H1ZM1 7.5H17H1Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className={hamburger ? "show-nav-header" : "nav-header"}>
        <Link
          className={`${
            active === "Home" ? "active-switch" : "inactive-switch"
          } `}
          to={"/"}
        >
          Home
        </Link>

        <Link
          className={`${
            active === "About" ? "active-switch" : "inactive-switch"
          }  `}
          to={"/aboutus"}
        >
          About Us
        </Link>

        <Link
          className={`${
            active === "Work" ? "active-switch" : "inactive-switch"
          } `}
          to={"/work"}
        >
          Our Work
        </Link>
        <Link
          className={`${
            active === "Contact" ? "active-switch" : "inactive-switch"
          } `}
          to={"/contact"}
        >
          Lets Talk
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
