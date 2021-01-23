import React, { useState } from "react";
import Slider from "react-slick";
import SliderData from "../slider-3d/slider-data";
import "./slider-banner.scss";
import SliderBannerCard from "./slider-banner-card";
import { ShoesNew } from "../../data/ShoesNew";
import { Icon } from "semantic-ui-react";
import SubcategorySliderCard from "./subcategory-slider-card";

const SliderBanner = ({ isWhatsHot, flashDeals, subcategoryBanner }) => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <Icon className="right-direction" name="angle right" size="big" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <Icon className="left-direction" name="angle left" size="big" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: subcategoryBanner ? 7 : isWhatsHot ? 6 : 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: subcategoryBanner ? 2 : 1,
          slidesToScroll: subcategoryBanner ? 2 : 1,
        },
      },
    ],
  };
  console.log(SliderData);
  return (
    <div className="slider-banner-component">
      <h2 style={{ fontWeight: "bold" }}>{`${
        isWhatsHot
          ? "What's Hot"
          : flashDeals
          ? "FlashDeals"
          : subcategoryBanner
          ? ""
          : "New Arrivals"
      }`}</h2>
      <Slider className="slider-banner" {...settings}>
        {subcategoryBanner
          ? ShoesNew.slice(0, 7).map((item, index) => (
              <SubcategorySliderCard
                subcategoryBanner
                item={item}
                key={index}
              />
            ))
          : isWhatsHot
          ? ShoesNew.slice(0, 22)
              .filter((item) => item.likes_count > 1000)
              .map((item, index) => (
                <SliderBannerCard isWhatsHot item={item} key={index} />
              ))
          : flashDeals
          ? ShoesNew.slice(37, 80)
              .filter((item) => item.discount > 60)
              .map((item, index) => (
                <SliderBannerCard flashDeals item={item} key={index} />
              ))
          : ShoesNew.slice(25, 36)
              .filter((item) => (item.is_new = true))
              .map((item, index) => (
                <SliderBannerCard isWhatsHot item={item} key={index} />
              ))}
      </Slider>
    </div>
  );
};
export default SliderBanner;
