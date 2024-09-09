import React from "react";
import "./SupportSection.css";
import SupportImage from '../assets/images/support-section-image.png';  // The single image with icons and the person

const SupportSection = () => {
  return (
    <div className="support-section">
      <div className="support-content">
        <img src={SupportImage} alt="Customer Support with Icons" className="support-image" />
        <div className="support-text">
          <h2>24/7 customer support</h2>
          <p>
            Our team of responsible members is always available to help you all
            day long and ready to meet your demand. Reach out to us and we will
            always be there.
          </p>
        </div>
      </div>
      <div className="cta-section">
        <h2>Choose a better way to work</h2>
        <p>No credit card details | No additional installation | No time wasting</p>
        <button>Start my free trial &gt;</button>
      </div>
    </div>
  );
};

export default SupportSection;
