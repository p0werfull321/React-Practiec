import React, { useState } from "react";
import "./Carousel.css";

const arr = [
  { id: 1, img: "https://cdn.britannica.com/01/196601-004-17E4B1C4.jpg" },
  {
    id: 2,
    img: "https://hips.hearstapps.com/hmg-prod/images/carlos-alcaraz-of-spain-celebrates-during-the-mens-singles-news-photo-1692717328.jpg?resize=1200:*",
  },
  {
    id: 3,
    img: "https://cdn.britannica.com/57/183257-050-0BA11B4B/Roger-Federer-2012.jpg",
  },
];

const Carousel = () => {
  const [data, setData] = useState(0);
  function moveFwd() {
    if (data === arr.length - 1) {
      setData(0);
    } else {
      setData(data + 1);
    }
  }
  function moveBwd() {
    if (data === 0) {
      setData(arr.length - 1);
    } else {
      setData(data - 1); //data = 1
    }
  }
  function moveBeg() {
    setData(0);
  }

  return (
    <div>
      <div>
        <img class="a" src={arr[data].img} alt="" />
      </div>
      <button onClick={moveFwd}>Next</button>
      <button onClick={moveBwd}>Prev</button>
      <button onClick={moveBeg}>Start</button>
    </div>
  );
};

export default Carousel;
