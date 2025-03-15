import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
const Image =styled.img`
padding-top:10px;
width: 1000px;
height: auto;

`



function SimpleSlider2() {
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
        <Image src="/img/05.png"/>
        </div>
        <div>
        <Image src="/img/06.png"/>
        </div>
        <div>
        <Image src='/img/07.png'/>
        </div>

      </Slider>
    </div>
  );
}

export default SimpleSlider2;
