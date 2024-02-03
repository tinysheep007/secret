import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Questions.css"; // Import the CSS file

const Questions = () => {
  const navigate = useNavigate();

  let handlePookie = () => {
    navigate("/thxpookie");
  };

  let handleWot = () => {
    alert("Are you sure? You legally can't choose this.");
  };

  return (
    <div className="container">
      <div className="title">Do you want to be my valentine date (shy)?</div>

      <div className="buttons">
        <button onClick={handlePookie} className="button">
          Yes
        </button>
        <button onClick={handleWot} className="button">
          No
        </button>
        <button onClick={handlePookie} className="button">
          Non't
        </button>
        <button onClick={handlePookie} className="button">
          Vâng
        </button>
        <button onClick={handlePookie} className="button">
          Dạ
        </button>
        <button onClick={handlePookie} className="button">
          네
        </button>
        <button onClick={handlePookie} className="button">
          Sí
        </button>
        <button onClick={handlePookie} className="button">
          Да
        </button>
        <button onClick={handlePookie} className="button">
          نعم
        </button>
        <button onClick={handlePookie} className="button">
          Ναί
        </button>
      </div>
    </div>
  );
};

export default Questions;
