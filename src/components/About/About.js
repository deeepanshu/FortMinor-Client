import React from "react";
import "./About.css";

const About = props => {
  return (
    <div class="container" id="box">
      <div class="row">
        <div class="col-4">
          <img
            class="d-block w-100"
            alt="About"
            src="http://via.placeholder.com/720x866"
          />
        </div>
        <div class="col-8 text-justify">
          <h3>Our Story</h3>
          <p>
            Make Me Builder, aims to offer solutions in the construction market
            through partners including legal and financial experts, architecture
            and engineering consultants, construction materials, technology
            providers, and contractors.
            <br />
            <b>Caters To Customer Experience Levels</b>
            <br />
            We recognize that every customer has their unique requirements
            depending on the type, stage of the project, finances available,
            geography of the project and individual experience in availing
            construction services. We help you define what you need and pay for
            only those services and work according to your pace and
            requirements.
            <br />
            <b>Benefits and Upgrades</b>
            <br />
            Our goal is to provide you with comfort and peace of mind knowing
            that your home is being well cared by the professionals we offer.
            Our Services will take care of your home so you don’t have to worry
            about it since it’s in safe hands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
