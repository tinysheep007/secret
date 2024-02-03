import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomeStyles.css"; // Import the CSS file
import pic1 from "../Pictures/home1.png";
import pic2 from "../Pictures/home2.png";
import pic3 from "../Pictures/home3.png";
import pic4 from "../Pictures/home4.png";
import pic5 from "../Pictures/home5.png";
import pic6 from "../Pictures/home6.png";
import pic7 from "../Pictures/home7.png";
import pic8 from "../Pictures/home8.png";

const Home = () => {
  const [photoID, setPhotoID] = useState(1);
  const navigate = useNavigate();

  const images = [
    null,  // Placeholder for index 0
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8
  ];

  let choosePhotoID = () => {
    // Use the photoID as an index to get the corresponding image source
    return images[photoID];
  }
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

      {/* <img src={pic1}/> */}

      <div className="image-container">
        <img src={choosePhotoID()} alt="" className="image" />
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
