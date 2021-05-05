import React from "react";
import styled from "styled-components";
import "./header.css";
const Header = (props) => {
  return (
    <main>
      <nav className="navbar">
        <div className="welcome">
          <h3>Video Player</h3>
        </div>
        <ul>
          <li>
            <a href="'/">Home</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
        <button type="submit" className="bttn">
          Login
        </button>
      </nav>
    </main>
  );
};

export default Header;
