import React, { useState } from "react";
import Slider from "react-slick";
import SliderData from "./slider-data";
import "./slider.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function SliderComponent() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <IoIosArrowForward />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <IoIosArrowBack />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="slider-component">
      <Slider {...settings}>
        {SliderData.map((img, idx) => (
          <div
            key={img.id}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
          >
            <img src={img.image_url} alt={img} />
            <br />
            <div
              className={idx === imageIndex ? "name-price-block" : "none-block"}
            >
              <span>{img.subcategory}</span>
              <h2>${img.current_price}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;
