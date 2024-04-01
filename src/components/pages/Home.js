import React from "react";
import HeroSection from "../HeroSection";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      {/* <!-- Services Section --> */}
      <div class="services">
        <h1>Pop</h1>
        <div class="services__container">
          <div class="services__card"></div>
          <div class="services__card"></div>
          <div class="services__card"></div>
          <div class="services__card"></div>
        </div>
        <h1>Chill</h1>
        <div class="services__container">
          <div class="services__card1"></div>
          <div class="services__card1"></div>
          <div class="services__card1"></div>
          <div class="services__card1"></div>
        </div>
        <h1>Rock</h1>
        <div class="services__container">
          <div class="services__card2"></div>
          <div class="services__card2"></div>
          <div class="services__card2"></div>
          <div class="services__card2"></div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
