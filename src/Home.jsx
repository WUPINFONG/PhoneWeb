import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link,Outlet} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./SimpleSlider";
import styled from "styled-components";
import SimpleSlider2 from "./SimpleSlider2";
const Container = styled.div`
  width: 100%;
  max-width: 1200px; /* 限制最大寬度 */
  margin: auto;
  padding: 20px;
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const Styleh2 = styled.h2`
  padding: 10px;
  font-size: 32px; 
  text-align: center;
  border: 1px solid #000;
  border-radius: 5px;
  width: 100%;
  max-width: 600px; 

  @media (max-width: 768px) {
    font-size: 24px;
    width: 90%;
  }
`;

const SectionTitle = styled.p`
  margin-top: 10px;
  padding: 10px;
  font-size: 32px; 
  text-align: center;
  background-color: palevioletred;
  color: white;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 5px;
  }
`;

const CarouselWrapper = styled.div`
  padding: 20px;
  background-color: #d3d3d3;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

function Home() {
  return (
    <Container>
      <StyledTitle>
        <Styleh2>歡迎來手機購物 & 手機租借網站</Styleh2>
      </StyledTitle>

      <SectionTitle>最新消息</SectionTitle>
      <CarouselWrapper>
        <SimpleSlider2 />
      </CarouselWrapper>

      <SectionTitle>熱賣商品</SectionTitle>
      <CarouselWrapper>
        <SimpleSlider />
      </CarouselWrapper>
    </Container>
  );
}

export default Home;
