import React from "react";
import { Carousel } from "react-bootstrap";
import "../css/NavBar.css";

function CarrouselItemList() {
  return (
    <div>
      <Carousel className="padCarrousel" fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../assets/img/banner2.jpeg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../assets/img/banner3.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarrouselItemList;
