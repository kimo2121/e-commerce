import React from "react";
import { Card } from "semantic-ui-react";
import MainLink from "../MainLink/MainLink";
import "./slider-banner.scss";

const SliderBannerCard = ({ item, isWhatsHot }) => {
  return (
    <Card className="Slider-banner-card">
      <MainLink pathname={`/product/${item.id}`}>
        <img
          className={isWhatsHot ? "image-card-style-1" : "image-card-style-2"}
          src={item.image_url}
          alt=""
        />
      </MainLink>
      <MainLink
        homestyle
        title={`${item.name.slice(0, 20)}...`}
        pathname={`/product/${item.id}`}
      />
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h4>${item.current_price}</h4>
          <h4 className="discounted-item">${item.raw_price}</h4>
        </div>
      </div>
    </Card>
  );
};

export default SliderBannerCard;
