import React from "react";
import icon from "../images/icon-music.svg";
import hero from "../images/illustration-hero.svg";
import backgroundImage from "../images/pattern-background-desktop.svg";
const OrderSummary = () => {
  return (
    <div class="container">
      <img src={backgroundImage} alt="background" />
      <div class="card">
        <figure>
          <img src={hero} alt="illustration-hero" class="hero" />
        </figure>
        <h1 class="heading">Order Summary</h1>
        <p class="section">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div class="plan-section">
          <img src={icon} alt="icon-music" class="icon-music" />
          <p class="plan-name">Annual Plan</p>
          <p class="plan-price">$59.99/year</p>
          <button class="change-button">Change</button>
        </div>
        <div class="buttons">
          <button class="payment-button">Proceed to Payment</button>
          <button class="cancel-button">Cancel Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
