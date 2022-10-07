import React from "react";
import "./AboutUs.css";
import Footer from "../Footer";

import NavBar from "../NavBar";
import Others from "../Others/Others";
import Process from "../Process";

function AboutUs() {
  return (
    <div className="about-container">
      <NavBar active={"About"} />

      <Others />
      <div className="about">
        <Process />
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
