import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < 2) {
      setCount(count + 1);
    } else {
      setCount(count - 2);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(count + 2);
    }
  };

  return (
    <>
      <div className="container">
        <div className="left-arr">
          <button onClick={decrease}>
            <ArrowBackIosIcon />
          </button>
        </div>
        <div className="info">
          <img className="img" src={images[count].img} alt="" />
        </div>
        <div className="right-arr">
          <button onClick={increase}>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
      <div>
        <h1 className="title">{images[count].title}</h1>
        <p className="subtitle">{images[count].subtitle}</p>
      </div>
    </>
  );
}

export default Carousel;
