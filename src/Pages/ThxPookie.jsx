import React from "react";
import "../styles/ThxPookie.css"; // Import the CSS file

const ThxPookie = () => {
  let photoSRC = `./Pictures/thxpookie.png`;

  return (
    <div className="thx-pookie-container">
      <div className="image-container">
        <img src={photoSRC} alt="Pookie" className="image" />
      </div>
      <div className="thanks-message">
        Thanks, pookie! I love bbbbb!
      </div>
    </div>
  );
};

export default ThxPookie;
