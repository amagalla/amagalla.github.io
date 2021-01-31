import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/anthony-magallanes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i id="linkedin-icon" class="fa fa-linkedin fa-lg"></i>
        </a>
        <a
          href="https://github.com/amagalla"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            id="github-icon"
            className="footer-icons"
            class="fa fa-github fa-lg"
          ></i>
        </a>
      </div>
      <p className="footer-text">Anthony Magallanes • Software Engineer</p>
    </div>
  );
};

export default Footer;
