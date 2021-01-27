import React from "react";

import "./Page.css";
import Footer from "../footer/footer";
const Page = ({ children }) => {
  return (
    <div className="main-home">
      {/* <Slider /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Page;
