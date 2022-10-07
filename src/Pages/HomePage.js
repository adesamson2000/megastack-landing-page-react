import React from "react";
import NavBar from "./../NavBar";
import Header from "./../Header";
import Process from "./../Process";
import Button from "../Button";
import "./homepage.css";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="home-container">
      <NavBar active={"Home"} />
      <Header />
      <Process />

      <div className="home-product">
        <div className="home-description">
          <p className="case">Case Study</p>
          <p className="view">View More</p>
        </div>
        <div className="product-details">
          <div className="product-caption">
            <div className="card">
              <img src="/images/yummyspot.png" alt="yummy" />
            </div>

            <p>Yummy Spot</p>
            <p>UI/UX Design, Desktop App</p>
          </div>
          <div className="product-caption">
            <div className="card">
              <img src="/images/finance.png" alt="finance" />
            </div>
            <p>Vale Finance</p>
            <p>UI/UX Design, Website, Web App</p>
          </div>
        </div>
        <div className="product-details" id="capt">
          <div className="product-caption">
            <div className="card">
              <img src="/images/aero.png" alt="aero" />
            </div>
            <p>Aero</p>
            <p>UI/UX Design, Website</p>
          </div>
          <div className="product-caption">
            <div className="card">
              <img src="/images/godark.png" alt="godark" />
            </div>

            <p>GoDark</p>
            <p>Website, Web App Dev</p>
          </div>
        </div>
      </div>
      <footer className="home-footer">
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
    </div>
  );
}

export default HomePage;
