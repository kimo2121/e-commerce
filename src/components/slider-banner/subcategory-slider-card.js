import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

const SubcategorySliderCard = ({ item }) => {
  return (
    <div className="slider-multiple">
      <slider className="slider-multiple-list">
        <div key={item.id} className="slider-multiple-item">
          <div className="image-circle">
            <img className="image" src={item.image_url} alt="" />
          </div>
          <Link to="/" className="fukintext">
            {item.name}
          </Link>
        </div>
      </slider>
    </div>
  );
};

export default SubcategorySliderCard;
