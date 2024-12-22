import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
const Image =styled.img`
padding-top: 10px;
width: 1000px;
height: 500px;

`



function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    
  };
 
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <Image src="img/07.jpg"/>
        </div>
        <div>
        <Image src="img/08.jpg"/>
        </div>
        <div>
        <Image src="img/08.png"/>
        </div>

      </Slider>
    </div>
  );
}

export default SimpleSlider;
