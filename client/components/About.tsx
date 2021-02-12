import React, { FunctionComponent } from "react";
import "../styles/about.scss";
import Headshot from "../assets/Anthony_Magallanes.png";

const About: FunctionComponent = () => {
  return (
    <>
      <div className="title" id="about">
        <div className="title-text">
          Hello, <br /> I'm Anthony, <br />a Software Engineer
        </div>
      </div>
      <div className="about-container">
        <div className="about-picture">
          <img className="about-headshot" src={Headshot} />
        </div>
        <div className="about-info">
          <span id="about-hello-text">
            Hello There, <br />
            <br />
          </span>
          <p>
            I'm Anthony Magallanes, a Software Engineer with a Multimedia degree
            with emphasis in Web Development from Ohlone College. After taking
            interest in Advanced Mobile and Web development classes, I expanded
            to contribute into open source products where I got to write clean
            and scalable code. I enjoy creating Full Stack applications as well
            as contribuing for the open source community.
            <br />
            <br />
            When I am not programming, I am exploring new places, trying new
            foods, as well as practice Wushu Kung Fu and Martial Arts Tricking.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
