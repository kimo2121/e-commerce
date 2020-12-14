import React from "react";
import { Fade } from "react-slideshow-image";
import sofa from "../../assets/images/sofa.jpg";
import living from "../../assets/images/living.jpg";
import lamp from "../../assets/images/lamp.jpg";
import "react-slideshow-image/dist/styles.css";
import "./banner.css";
const FadeBanner = () => {
  const fadeImages = [living, sofa, lamp];
  return (
    <div>
      <div className="fade-container">
        <Fade
          duration={3500}
          transitionDuration={500}
          indicators={false}
          pauseOnHover={false}
        >
          <div className="each-fade">
            <div>
              <img src={fadeImages[0]} alt="" />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[1]} alt="" />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]} alt="" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default FadeBanner;
