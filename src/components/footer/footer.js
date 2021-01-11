import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-page">
      <div className="footer-first">
        <div className="about-us-div">
          <h3>About us</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            explicabo veritatis, consequatur eligendi exercitationem iure
            perferendis culpa reprehenderit
          </p>
        </div>
        <div className="useful-links">
          <h3>Useful links</h3>

          <Link to="/">Downloadable product</Link>
          <br />
          <Link to="/">On sale product</Link>
          <br />
          <Link to="/">Our new product</Link>
          <br />
          <Link to="/">Order tracking</Link>
          <br />
          <Link to="/">Payment methods</Link>
        </div>
        <div className="download">
          <h3>Download</h3>
          <Link to="/">Instgram</Link>
          <br />
          <Link to="/">Facebook</Link>
          <br />
          <Link to="/">Twitter</Link>
          <br />
          <Link to="/">Pintrest</Link>
          <br />
          <Link to="/">Youtube</Link>
        </div>
        <div className="call-center">
          <h3>Call center</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <Link to="/">Pintrest</Link>
          <br />
          <Link to="/">Youtube</Link>
        </div>
      </div>
      <hr size="1" />
      <div className="footer-second">
        <div></div>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Shop</Link>
        <Link to="/">Portfolio</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Contact</Link>
        <p className="made-by">
          Made with love by<Link to="/"> Qode Interactive</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
