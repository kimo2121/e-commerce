import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import mastercard from "../../assets/icons/mastercard.svg";
import americanexpress from "../../assets/icons/americanexpress.svg";
import paypal from "../../assets/icons/paypal.svg";
import visa from "../../assets/icons/visa.svg";
import unionpay from "../../assets/icons/unionpay.svg";
const iconForFooter = [mastercard, americanexpress, paypal, visa, unionpay];
const Footer = () => {
  return (
    <div className="footer-page">
      <div className="footer-first">
        <div className="about-us-div">
          <h3>About us</h3>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            explicabo veritatis, consequatur eligendi exercitationem iure
            perferendis culpa reprehenderit
          </div>
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
          <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
          <Link to="/">Pintrest</Link>
          <br />
          <Link to="/">Youtube</Link>
        </div>
      </div>
      <div className="divider-footer"></div>
      <div className="icon-footer-container">
        <span>We Accept : </span>
        {iconForFooter.map((icon, indx) => (
          <div className="footer-icons" key={indx}>
            <img src={icon} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
