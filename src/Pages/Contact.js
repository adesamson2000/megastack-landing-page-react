import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import "./contact.css";
function Contact() {
  return (
    <>
      <NavBar active={"Contact"} />
      <div className="contact-container">
        <div className="header-description">
          <p className="headline">
            Become our partner Let’s talk about your next project
          </p>
          <p className="sub-heading">
            Drop us a line with the form below or better still shoot us an email
            on hello@magastack.tech
          </p>
        </div>
      </div>
      <form>
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Your email" />
        </div>
        <div className="input-group">
          <label>Phone Number</label>
          <input type="number" placeholder="Your number" />
        </div>
        <div className="input-group">
          <label>Message</label>
          <textarea
            type="text"
            placeholder="Tell us briefly about ur project"
          />
        </div>
        <button className="contact-btn">Send Message</button>
      </form>
      <div className="foot">
        <Footer />
      </div>
    </>
  );
}

export default Contact;
