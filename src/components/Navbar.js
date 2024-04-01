import React, { useState, useEffect } from "react";
import "../css/all.css";
import "../css/aos.css";
import "../css/fonts.css";
import "../css/owl.carousel.min.css";
import "../css/owl.theme.default.min.css";
import "../css/Style.css";

function Navbar() {
  return (
    <>
      {/* <!-- ----------------------------  Navigation ---------------------------------------------- --> */}

      <nav class="nav">
        <div class="nav-menu flex-row">
          <div class="nav-brand">
            <a href="#" class="text-gray">
              AMAN KITCHEN
            </a>
          </div>
          <div class="toggle-collapse">
            <div class="toggle-icons">
              <i class="fas fa-bars"></i>
            </div>
          </div>
          <div>
            <ul class="nav-items">
              <li class="nav-link">
                <a href="#">Home</a>
              </li>
              <li class="nav-link">
                <a href="#">Popular</a>
              </li>
              <li class="nav-link">
                <a href="#">Foods</a>
              </li>
              <li class="nav-link">
                <a href="#">Drinks</a>
              </li>
              <li class="nav-link">
                <a href="#">Location</a>
              </li>
              <li class="nav-link">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="social text-gray">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* <!-- ------------x---------------  Navigation --------------------------x------------------- --> */}
    </>
  );
}

export default Navbar;
