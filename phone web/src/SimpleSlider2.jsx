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
        <Image src={`${import.meta.env.BASE_URL}/img/05.PNG`}/>
        </div>
        <div>
        <Image src={`${import.meta.env.BASE_URL}/img/06.PNG`}/>
        </div>
        <div>
        <Image src={`${import.meta.env.BASE_URL}/img/07.PNG`}/>
        </div>

      </Slider>
    </div>
  );
}

export default SimpleSlider2;
