import React from "react";
import Button from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <p className="cta-heading">Get in touch </p>
      <div className="cta">
        <div className="cta-btn">
          <Link to={"/contact"}>
            <Button title="Lets Talk" />
          </Link>
        </div>

        <p className="cta-info">
          Reach out to find out how we can be of help to you. Hit the button
          below to send us an email at hello@megastack.tech...
          <br />
          <br />
          You can alsocheck out some of our previous project we've helped our
          partners ship to their users. Click here to see our works.
        </p>
      </div>
      <p className="cta-border"></p>
      <div className="copyright-container">
        <div className="copyright-info">
          ©Copyright 2022, Megastack Technologies Limited
        </div>
        <div className="copyright-socials">
          <p className="instagram">
            <img src="/images/instagram.svg" alt="instagram" />
            Instagram
          </p>
          <p className="linkedin">
            <img src="/images/linkedin.svg" alt="linkedin" />
            Linkedin
          </p>
          <p className="facebook">
            <img src="/images/facebook.svg" alt="facebook" />
            Facebook
          </p>
          <p className="twitter">
            <img src="/images/twitter.svg" alt="twitter" />
            Twitter
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
