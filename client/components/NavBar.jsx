import React, { useState } from "react";
import "../styles/navBar.scss";
import Recoilize from "../assets/recoilize_icon.png";
import { Link } from "react-scroll";

const NavBar = () => {

  const [toggle, setToggle] = useState(false)

  const toggleMode = () => {
    if (!toggle) {
      document.querySelector('body').style.backgroundColor = "#18191a";
      document.querySelector('.navBar-container').style.backgroundColor = "#18191a";
      document.querySelector('body').style.color = "white";
    }
    else {
      document.querySelector('body').style.backgroundColor = "white";
      document.querySelector('.navBar-container').style.backgroundColor = "white";
      document.querySelector('body').style.color = "#18191a";
    }
    setToggle(tog => !tog)
  }

  return (
    <div className="navBar-container">
      <ul className="nav-items">
        <li id="recoilize-main">
          <img src={Recoilize} id="recoilize-icon" />
        </li>
        <li className="nav-buttons" id="home-button">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={475}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="nav-buttons">
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="nav-buttons">
          <Link
            activeClass="active"
            to="interest"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Interest
          </Link>
        </li>
        <li className="nav-buttons">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li>
          <label className="switch">
            <input onClick={toggleMode} type="checkbox"/>
            <span className="slider round"></span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
