import React, { useState } from "react";
import Slider from "react-slick";
import "./slider-multiple.css";
import SliderData from "./slider-multiple-data";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const SliderMultiple = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow-1 next-1" onClick={onClick}>
        <IoIosArrowForward />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow-1 prev-1" onClick={onClick}>
        <IoIosArrowBack />
      </div>
    );
  };
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: false,
    swipe: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="slider-multiple">
        <h2>New Arrival</h2>
      <Slider {...settings}>
        {SliderData.map((img, idx) => (
          <div key={img.id} className="slider-multiple-item">
            <img className="image" href="/" src={img.image_url} alt={img} />
            <Link to="/" className="fukintext">
              {img.subcategory}
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SliderMultiple;
