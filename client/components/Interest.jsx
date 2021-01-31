import React from "react";
import "../styles/interest.scss";

const Interest = () => {
  return (
    <>
      <div className="work-title" id="interest" data-aos="fade-up">
        Interest
      </div>
      <div className="reel-container" data-aos="fade-right">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rMKDuC-FWH0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="reel-info-container" data-aos="fade-left">
        <p>
          Not only am I a Software Engineer, I am also a World Class Martial
          Artist. I have studied Wushu Kung Fu since the age of five. I have won
          numerous World Titles as well as performed in front of legends such as
          having the honor of performing in front of the living cast of Bruce
          Lee’s Enter the Dragon for their 40th reunion. I studied many Wushu
          weapons as well as study Martial Arts Tricking.
        </p>
      </div>
    </>
  );
};

export default Interest;
