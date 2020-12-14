import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slider.css";
const Slider = () => {
  return (
    <div className="slide-page">
      <div className="slide-container">
        <Slide
          className="slider"
          duration={3500}
          transitionDuration={500}
          pauseOnHover={false}
          indicators={false}
        >
          <div className="each-slide">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, inventore, fugiat ipsum ratione rem delectus
              distinctio esse quas minus cumque officiis libero praesentium
              nobis laudantium repudiandae veniam enim at labore.
            </p>
            <h2>
              <span></span>Mike Papadodulos
            </h2>
            <span>Designer</span>
          </div>
          <div className="each-slide">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, inventore, fugiat ipsum ratione rem delectus
              distinctio esse quas minus cumque officiis libero praesentium
              nobis laudantium repudiandae veniam enim at labore.
            </p>
            <h2>
              <span></span>Lorenzo Soto
            </h2>
            <span>Architect</span>
          </div>
          <div className="each-slide">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, inventore, fugiat ipsum ratione rem delectus
              distinctio esse quas minus cumque officiis libero praesentium
              nobis laudantium repudiandae veniam enim at labore.
            </p>
            <h2>
              <span></span>Luke Hanson
            </h2>
            <span>Photographer</span>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Slider;
