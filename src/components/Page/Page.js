import React from "react";
import { Link } from "react-router-dom";
import FadeBanner from "../banner/banner";

import "./Page.css";
import Footer from "../footer/footer";
const Page = ({ children }) => {
  return (
    <div className="main-home">
      {/* <FadeBanner /> */}
      {/* <Slider /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Page;
