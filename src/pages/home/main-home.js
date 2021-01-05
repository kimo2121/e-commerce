import React from "react";
import { Link } from "react-router-dom";

import "./main-home.css";
import Footer from "../../components/footer/footer";
import SliderComponent from "../../components/slider-3d/slider";
import SliderMultiple from "../../components/slider-multiple/slider-multiple";
import BasicProductCard from "../../components/ProductCard/BasicProductCard";
import { connect } from "react-redux";

const MainHome = ({ products }) => {
  return (
    <div className="main-home">
      <div className="home-page-banner">
        <img
          src="https://imgaz1.chiccdn.com/myos/2020/1207/20201207202110_109.jpg.webp"
          alt=""
        />
      </div>
      <SliderMultiple />
      <div className="brands-section">
        <h2 className="dep-brands">Featured Brands</h2>
        <div className="christmas-offers">
          <Link to="/">
            <img
              src="https://imgaz1.chiccdn.com/os/202012/20201214020258_742.jpg.webp"
              alt=""
            />
          </Link>
        </div>
        <div className="brands">
          <div style={{ display: "flex" }}>
            <Link style={{ marginRight: "4%" }} to="/">
              <img
                src="https://imgaz1.chiccdn.com/os/202012/20201214020329_672.jpg.webp"
                alt=""
              />
            </Link>
            <Link to="/">
              <img
                src="https://imgaz1.chiccdn.com/os/202012/20201214020349_257.jpg.webp"
                alt=""
              />
            </Link>
          </div>
          <div style={{ display: "flex", marginTop: "4%" }}>
            <Link style={{ marginRight: "4%" }} to="/">
              <img
                src="https://imgaz1.chiccdn.com/os/202012/20201214020401_751.jpg.webp"
                alt=""
              />
            </Link>
            <Link to="/">
              <img
                src="https://imgaz1.chiccdn.com/os/202012/20201214020425_168.jpg.webp"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="dep-flash-deals">
        {/* <h2 className="flash-deals">Flash Deals</h2> */}
        <h2>Flash Deals</h2>
        <div style={{ display: "flex" }}>
          {products.map((product) => (
            <BasicProductCard isHome product={product} />
          ))}

          {/* <br style={{ width: "10%" }} /> */}
        </div>
      </div>
      <div className="hot-categories-slider-dev">
        <h2 className="dep-categories">What's Hot</h2>
        <SliderComponent />
        <div className="hot-categories">
          <h2 className="dep-sub-categories">Hot Categories</h2>
          <div className="hot-categories-component">
            <Link to="/">
              <img
                src="https://imgaz1.chiccdn.com/thumb/view/oaupload/newchic/images/09/42/d2d8cb7b-1212-45b1-a257-83f7d77db238.jpg"
                alt=""
              />
              <span>Shorts</span>
            </Link>
            <Link to="/">
              <img
                src="https://imgaz1.chiccdn.com/thumb/view/oaupload/ser1/newchic/images/E5/B4/cfe55531-4462-45ec-9221-268cf5e2a054.jpeg"
                alt=""
              />
              <span>Shoes</span>
            </Link>
            <Link to="/">
              <img
                src="https://imgaz1.chiccdn.com/thumb/view/oaupload/ser1/newchic/images/4E/C6/5313f638-52b0-4c28-9f91-21d764566455.jpg"
                alt=""
              />
              <span>Bags</span>
            </Link>
            <Link to="/">
              <img
                src="https://imgaz1.chiccdn.com/thumb/view/oaupload/newchic/images/94/BF/048d7811-0428-4167-8cb6-c554b88c3612.jpg"
                alt=""
              />
              <span>Sandals</span>
            </Link>
            <Link to="/">
              <img
                src="https://imgaz1.chiccdn.com/thumb/view/oaupload/newchic/images/67/57/3d5bbcc7-0b51-4e57-969b-87731c0be5ec.jpg"
                alt=""
              />
              <span>Plants</span>
            </Link>
            <Link to="/">
              <img
                src="https://imgaz1.chiccdn.com/thumb/view/oaupload/ser1/newchic/images/87/1F/fb64b355-77c6-455d-a3f9-a69418dbd566.jpeg"
                alt=""
              />
              <span>Socks</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="dep-recommended-for-you">
        <h2 className="recommended-for-you">Recommended For You</h2>
      </div>

      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => ({
  products: state.products.products,
});
export default connect(mapStateToProps)(MainHome);
