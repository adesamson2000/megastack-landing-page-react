import React from "react";
import "./Product.css";
function Product() {
  return (
    <div className="product-container">
      <div className="product-description">
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
  );
}

export default Product;
