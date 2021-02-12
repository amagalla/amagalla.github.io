import React, { FunctionComponent } from "react";
import "../styles/work.scss";
import recoilizeTitle from "../assets/recoilize_cover.png";
import hideAndSecret from "../assets/hide&Secret.png";

const Work: FunctionComponent = () => {
  return (
    <>
      <div className="work-title" id="work" data-aos="fade-up">
        Work
      </div>
      <div className="work-container" data-aos="fade-up">
        <div className="recoilize-project">
          <div className="work-title-container">
            <img className="recoilize-cover" src={recoilizeTitle} />
          </div>
          <p className="work-discription">
            Programmed an open sourced developer tool for engineers to debug
            applications built with Recoil - which is Facebook's experiemental
            state management library. It allows users to log state changes, time
            travel back to previous state, and visualize recoil-based
            applications. The tool analyzes the relationships of Recoil's Atoms
            and Selectors which are displayed through visualizations and also
            provides information about component render times.
          </p>
          <p className="web-link-p">
            (
            <a
              className="web-link"
              href="https://www.recoilize.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to learn more
            </a>
            )
          </p>
          <hr className="horizontal-line" />
          <p className="work-tech-stack">
            •TypeScript <span className="one-word">•React Fiber</span> •React
            •Hooks •D3 •JSX •Webpack •Jest
          </p>
        </div>

        <div className="hideAndSecret">
          <div className="work-title-container">
            <img className="hideAndSecret-cover" src={hideAndSecret} />
          </div>
          <p className="work-discription">
            Created a geolocation based game inspired by Pokemon Go. Users are
            able to create, drop, and pick up secrets in the real world wherever
            they are currently located at. Utilizing google maps, you are able
            to visually see and pick up new secrets around you. You are able to
            compare yourself to the world with a global leadership board as well
            as see the stash of secrets you managed to collect.
          </p>
          <p className="web-link-p">
            (
            <a
              className="web-link"
              href="https://github.com/secret-proj/projectSecret"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to download from Github
            </a>
            )
          </p>
          <hr className="horizontal-line" />
          <p className="work-tech-stack">
            •React •Hooks <span className="one-word">•Google Maps Api</span>{" "}
            <span className="one-word">•React Router</span> •Node •Express
            •PostgreSQL •Suspense •Webpack
          </p>
        </div>
      </div>
    </>
  );
};

export default Work;
