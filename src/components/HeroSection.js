import React from "react";
import "../App.css";

function HeroSection() {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <img className="logo" src="./images/logo.jpg"></img>
          <h2>Play any song on demand</h2>
          <button className="main__btn">
            <a href="#">Try 30 days free</a>
          </button>
        </div>
        <div className="main__img--container">
          <img id="main__img" src="images/dj.jpg" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
