import React from "react";
import "./Process.css";
function Process() {
  return (
    <div className="process-container">
      <div className="process-caption">
        <p className="process-title">What we do</p>
        <p className="process-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
          feugiat a volutpat potenti nisi...
        </p>
      </div>
      <div className="service-category">
        <div className="service-caption">
          <img src="/images/web.png" alt="web" />
          <p className="service-title">Web/Mobile Development</p>
          <p className="service-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
            feugiat a volutpat potenti nisi, et eget facilisis facilisi. Purus,
            purus tincidunt metus, euismod. Aliquam ullamcorper dolor sit lacus
            vel tempus ullamcorper...
          </p>
        </div>
        <div className="service-caption">
          <img src="/images/design.png" alt="design" />
          <p className="service-title">UI/UX Design</p>
          <p className="service-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
            feugiat a volutpat potenti nisi, et eget facilisis facilisi. Purus,
            purus tincidunt metus, euismod. Aliquam ullamcorper dolor sit lacus
            vel tempus ullamcorper...
          </p>
        </div>
      </div>
      <div className="service-category">
        <div className="service-caption">
          <img src="/images/business.png" alt="business" />
          <p className="service-title">Business Automation</p>
          <p className="service-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
            feugiat a volutpat potenti nisi, et eget facilisis facilisi. Purus,
            purus tincidunt metus, euismod. Aliquam ullamcorper dolor sit lacus
            vel tempus ullamcorper...
          </p>
        </div>
        <div className="service-caption">
          <img src="/images/blockchain.png" alt="blockchain" />
          <p className="service-title">Blockchain Developement</p>
          <p className="service-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
            feugiat a volutpat potenti nisi, et eget facilisis facilisi. Purus,
            purus tincidunt metus, euismod. Aliquam ullamcorper dolor sit lacus
            vel tempus ullamcorper...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Process;
