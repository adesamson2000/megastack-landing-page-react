import React from "react";
import "./Others.css";
import Button from "../Button";
import { Link } from "react-router-dom";
function Others({ image }) {
  return (
    <div className="other-container">
      <div className="header-description">
        <p className="headline">
          Your partner in building amazing digital products
        </p>
        <p className="sub-heading">
          We are a software development agency leveraging design thinking
          framework to help our clients meet their increasing revenue with best
          users experience.
        </p>
      </div>
      <div className="button">
        <Link to={"/contact"}>
          <Button title="Lets Talk" />
        </Link>
      </div>
      {/* <div className="section">
        <div className="section-description">
          <p className="title">We Ideate</p>
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nullam
            erat quam tellus feugiat risus semper. Amet orci facilisi nec.
          </p>
        </div>
        <div className="section-description">
          <p className="title">We Design</p>
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nullam
            erat quam tellus feugiat risus semper. Amet orci facilisi nec.
          </p>
        </div>
        <div className="section-description">
          <p className="title">We Develop</p>
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nullam
            erat quam tellus feugiat risus semper. Amet orci facilisi nec.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Others;
