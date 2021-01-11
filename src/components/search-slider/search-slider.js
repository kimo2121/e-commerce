import React, { useState } from "react";
import "./search-slider.css";
import "antd/dist/antd.css";
import { Slider, Switch } from "antd";

const SearchSlider = () => {
  const [disabled, setDisabled] = useState(false);

  const handleDisabledChange = (disabled) => {
    setDisabled(disabled);
  };
  
  return (
    <div className="search-slider">
      
      <Slider range defaultValue={[20, 50]} disabled={disabled} />
      <Switch size="small" checked={disabled} onChange={handleDisabledChange} />
    </div>
  );
};

export default SearchSlider;
