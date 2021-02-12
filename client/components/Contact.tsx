import React, { useState } from "react";
import "../styles/contact.scss";
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_mt8vt8e",
      "template_454t9fn",
      e.target,
      "user_vXnsBHdh7Ji4Pish6PjcC"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}
const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function gotSubmitted(e) {
    e.preventDefault;
    console.log("submit has been clicked");
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="work-title" id="contact" data-aos="zoom-in">
        Let's Talk More
      </div>
      <form className="form" onSubmit={sendEmail} data-aos="zoom-in">
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
          ></input>
        </div>
        <div className="form-fields">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
          ></input>
        </div>
        <div className="form-fields">
          <input
            type="text"
            className="form-control"
            placeholder="Subject"
            name="subject"
          ></input>
        </div>
        <div className="form-fields">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={10}
            placeholder="Your Message"
            name="message"
          ></textarea>
        </div>
        <div id="form-submit">
          <button onClick={gotSubmitted} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        {isSubmitted ? (
          <div className="secret-sentMessage">
            Your message has been sent! Thank you!
          </div>
        ) : (
          <div></div>
        )}
      </form>
      <div data-aos="zoom-out">
      <div className="contact-icon-container">
        <div className="contact-divs">
          <i className="fa fa-map-marker fa-2x"></i>
        </div>
        <div className="contact-divs">San Francisco, Bay Area</div>
      </div>
      <div className="contact-icon-container">
        <div className="contact-divs">
          <i className="fa fa-phone fa-2x"></i>
        </div>
        <div className="contact-divs">(510) 314-5458</div>
      </div>
      <div className="contact-icon-container">
        <div className="contact-divs">
          <i className="fa fa-envelope fa-2x"></i>
        </div>
        <div className="contact-divs">
          <a className="web-link" href="mailto:anthonymagallanes24@gmail.com">
            anthonymagallanes24@gmail.com
          </a>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
