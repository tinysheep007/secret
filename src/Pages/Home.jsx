import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomeStyles.css"; // Import the CSS file

const Home = () => {
  const [photoID, setPhotoID] = useState(1);
  const navigate = useNavigate();

  let photoSRC = `./Pictures/home${photoID}.png`;
  let words = [
    "oop",
    "This is Peter Without Van",
    "This is Peter WITH VAN",
    "Peter sleeping without van POV",
    "This is how Peter wants to spend my night!",
    "even though Peter always makes her mad",
    "Van always treats Peter with goodies",
    "So, quick question time!",
    "??????",
    "jk",
  ];

  let handleNext = () => {
    let newId = photoID + 1;
    setPhotoID(newId);

    if (photoID >= 9) {
      navigate("/questions");
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNext]);

  return (
    <div className="container">
      <div className="header">Home Page</div>

      <div className="image-container">
        <img src={photoSRC} alt="" className="image" />
        <div className="caption">{words[photoID]}</div>
      </div>

      <div className="button-container">
        <button onClick={handleNext} className="button">
          Next Or Press -> arrow button
        </button>
      </div>
    </div>
  );
};

export default Home;
