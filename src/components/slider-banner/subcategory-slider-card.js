import React from "react";

const SubcategorySliderCard = ({ item }) => {
  return (
    <div className="slider-multiple">
      <div className="slider-multiple-list">
        <div key={item.id} className="slider-multiple-item">
          <div className="image-circle">
            <img className="image" src={item.image_url} alt="" />
          </div>
          <div to="/" className="fukintext">
            {item.category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubcategorySliderCard;
