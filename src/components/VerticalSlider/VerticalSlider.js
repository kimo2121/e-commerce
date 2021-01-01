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
  // componentDidMount() {
  //   props.setImage("");
  // }

  render() {
    const settings = {
      //   dots: true,
      infinite: true,
      slidesToShow: 8,
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
        // this.getCurrentIndex(currentSlide);
      },
    };
    console.log(this.state.index);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column ",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <KeyboardArrowUpIcon onClick={this.previous} className="arrow" />

        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {Array(20)
            .fill()
            .map((i) => (
              <div className="">
                <Link onClick={() => this.props.setImage(img)}>
                  <img
                    src={img}
                    alt=""
                    style={{
                      width: "20ox",
                      height: "40px",
                      // objectFit: "contain",
                    }}
                  />
                </Link>
              </div>
            ))}
        </Slider>
        <KeyboardArrowDownIcon onClick={this.next} className="arrow" />
      </div>
    );
  }
}
