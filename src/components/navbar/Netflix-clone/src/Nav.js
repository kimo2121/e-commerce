import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 130) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://assets.dryicons.com/uploads/icon/svg/8841/63a0a827-681d-4160-963c-efdbdbfc0c46.svg"
        alt="Netflix Logo"
      />
    </div>
  );
}

// "https://pbs.twimg.com/profile_images/124011999041155/0/0f/"
// "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/VisualEditor_icon_profile-progressive.svg/1200px-VisualEditor_icon_profile-progressive.svg.png"
// "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/VisualEditor_icon_profile-progressive.svg/800px-VisualEditor_icon_profile-progressive.svg.png"
export default Nav;
