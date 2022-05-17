import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function HomeCarousel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showStatus={false}
      showThumbs={false}
      showIndicators={true}
      className="mb-3"
    >
      <div>
        <img src="https://links.papareact.com/gi1" alt="carousel_image" />
      </div>
      <div>
        <img src="https://links.papareact.com/6ff" alt="carousel_image" />
      </div>
      <div>
        <img src="https://links.papareact.com/7ma" alt="carousel_image" />
      </div>
      <div>
        <img
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt="carousel_image"
        />
      </div>
      <div>
        <img
          src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
          alt="carousel_image"
        />
      </div>
    </Carousel>
  );
}

export default HomeCarousel;
