import React from "react";
import "../styles/ThxPookie.css"; // Import the CSS file
import pic from "../Pictures/thx.png";

const ThxPookie = () => {
  let photoSRC = `./Pictures/thx.png`;

  return (
    <div className="thx-pookie-container">
      <div className="image-container">
        <img src={pic} alt="Pookie" className="image" />
      </div>
      <div className="thanks-message">
        Thanks, pookie! I love bbbbb!
      </div>
    </div>
  );
};

export default ThxPookie;
