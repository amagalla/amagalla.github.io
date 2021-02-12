import React, { useState } from "react";
import "../styles/contact.scss";
import emailjs from "emailjs-com";

const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_mt8vt8e",
      "template_454t9fn",
      e.target,
      "user_vXnsBHdh7Ji4Pish6PjcC"
    )
    .then(
      (result: any) => {
        console.log("this is result ", result);

        console.log(result.text);
      },
      (error: any) => {
        console.log(error.text);
      }
    );
  document.querySelector("form")!.reset();
};
const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function gotSubmitted(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault;
    setIsSubmitted(true);
  }

  return (
    <>
      <div
        className="work-title contact-heading"
        id="contact"
        data-aos="zoom-in"
      >
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
          <button
            onClick={gotSubmitted}
            type="submit"
            className="btn btn-primary"
          >
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
      <div className="icons-real-container">
        <div className="contact-icon-container">
          <div className="contact-divs">
            <i className="fa fa-map-marker fa-2x" data-aos="zoom-out"></i>
          </div>
          <div className="contact-divs" data-aos="zoom-out">
            San Francisco, Bay Area
          </div>
        </div>
        <div className="contact-icon-container">
          <div className="contact-divs">
            <i className="fa fa-phone fa-2x" data-aos="zoom-out"></i>
          </div>
          <div className="contact-divs" data-aos="zoom-out">
            (510) 314-5458
          </div>
        </div>
        <div className="contact-icon-container">
          <div className="contact-divs">
            <i className="fa fa-envelope fa-2x" data-aos="zoom-out"></i>
          </div>
          <div className="contact-divs" data-aos="zoom-out">
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
