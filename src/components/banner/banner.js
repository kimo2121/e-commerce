import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";
import image7 from "../../assets/images/image7.jpg";
import image8 from "../../assets/images/image8.jpg";
import image9 from "../../assets/images/image9.jpg";
import image10 from "../../assets/images/image10.jpg";
import { NextArrow, PrevArrow } from "../../util/util_functions";

import "./banner.css";

const bannerData = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="banner-component">
      <Slider {...settings}>
<<<<<<< HEAD
        {bannerData.map((item, indx) => (
          <div className="each-slide-in-banner" key={indx}>
=======
        {bannerData.map((item) => (
          <div className="each-slide-in-banner">
>>>>>>> ae8fa3b05d3dfa8fc54973f9cd6bd1ccb0d6e29d
            <img src={item} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
