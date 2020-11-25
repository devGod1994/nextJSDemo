import React from "react";
import PropTypes from "prop-types";

export const HeroPropTypes = {
  headline: PropTypes.string,
  subheadline: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};

function Hero({ headline, subheadline, buttonText, buttonLink }) {
  return (
    <section className="hero">
      <div className="hero-left-decoration " />
      <div className="hero-right-decoration " />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0 ">{headline}</h1>
            <p className="hero-paragraph ">{subheadline}</p>
            <p className="hero-cta mb-0 ">
              <a
                className="button button-primary button-shadow"
                href={buttonLink}
              >
                {buttonText}
              </a>
            </p>
          </div>
          <div className="hero-illustration" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
