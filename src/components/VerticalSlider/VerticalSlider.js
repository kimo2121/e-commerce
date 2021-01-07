import React, { Component } from "react";
import "./VerticalSlider.css";
import Slider from "react-slick";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link } from "react-router-dom";

const img = "https://b2b.iciw.com/bilder/artiklar/ICIW-533.jpg?m=1571322922";

function SampleNextArrow(props) {
  const {
    className,
    style,
    // onClick
  } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", opacity: "0" }}
      //   onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", opacity: "0" }}
      //   onClick={onClick}
    />
  );
}

export default class VerticalSwipeToSlide extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.getCurrentIndex = this.previous.bind(this);
    this.state = {
      index: 0,
    };
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  getCurrentIndex(index) {
    this.setState({ index });
  }

  render() {
    const settings = {
      //   dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      swipeToSlide: true,
      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      },
    };
    console.log(this.state.index);
    const data = this.props.data;
    const imgs = [
      data.variation_0_image && data.variation_0_image,
      data.variation_1_image && data.variation_1_image,
      data.image_url && data.image_url,
    ];
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column ",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "2rem",
        }}
      >
        <div
          style={{
            height: "60vh",
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
          }}
        >
          <KeyboardArrowUpIcon onClick={this.previous} className="arrow" />
          <div style={{ margin: "1.4rem auto" }}>
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {imgs.map((i) => (
                <div>
                  <Link onClick={() => this.props.setImage(i)}>
                    <img
                      src={i}
                      alt=""
                      style={{
                        width: "20ox",
                        height: "40px",
                        objectFit: "contain",
                      }}
                    />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
          <KeyboardArrowDownIcon onClick={this.next} className="arrow" />
        </div>
      </div>
    );
  }
}
