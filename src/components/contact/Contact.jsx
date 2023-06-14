import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <p className="contact__title">Let's talk about everything!</p>
          {/* <p className="contact__details">
            Don't like forms? Send me an email. 👋
          </p> */}
        </div>

        <form action="https://getform.io/f/57917c58-e09b-4562-9c15-1a0966062474" method="POST" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                name="name"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                name="Email"
                placeholder="Insert your email"
              />
            </div>
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="Message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
