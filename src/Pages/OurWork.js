import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import NavBar from "../NavBar";
import "./OurWork.css";

function OurWork() {
  return (
    <>
      <NavBar active={"Work"} />
      <div className="work-container">
        <div className="headwork">
          <div className="header-description">
            <p className="headline">Check out some of our partner’s projects</p>
            <p className="sub-heading">
              We have collaborated on a variety of projects across divers
              industries and discipline. Yes, we make complex idea into usable,
              functional digital products and help our partners reach their
              goals
            </p>
          </div>
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
              You can alsocheck out some of our previous project we've helped
              our partners ship to their users. Click here to see our works.
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
    </>
  );
}

export default OurWork;
