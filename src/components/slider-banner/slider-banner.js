import React from "react";
import Slider from "react-slick";
import "./slider-banner.scss";
import SliderBannerCard from "./slider-banner-card";
import SubcategorySliderCard from "./subcategory-slider-card";
import { useSelector } from "react-redux";
import { NextArrow, PrevArrow } from "../../util/util_functions";
import MainLink from "../MainLink/MainLink";
import SliderData from "./slider-data";

const SliderBanner = ({ isWhatsHot, flashDeals, subcategoryBanner }) => {
  const sliderProducts = useSelector((state) => state.products.sliderProducts);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: subcategoryBanner ? 7 : isWhatsHot ? 5 : 4,
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
          ? SliderData.map((item, index) => (
              <MainLink
                pathname={`/${item.category}/${item.subcategory}`}
                key={index}
              >
                <SubcategorySliderCard subcategoryBanner item={item} />
              </MainLink>
            ))
          : isWhatsHot
          ? sliderProducts
              .slice(120, 140)
              // .filter((item) => item.likes_count > 500)
              .map((item, index) => (
                <SliderBannerCard isWhatsHot item={item} key={index} />
              ))
          : flashDeals
          ? sliderProducts
              .slice(0, 140)
              .filter((item) => item.discount > 60)
              .map((item, index) => (
                <SliderBannerCard flashDeals item={item} key={index} />
              ))
          : sliderProducts
              .slice(90, 102)
              .filter((item) => (item.is_new = true))
              .map((item, index) => (
                <SliderBannerCard isWhatsHot item={item} key={index} />
              ))}
      </Slider>
    </div>
  );
};
export default SliderBanner;
