import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link,Outlet} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./SimpleSlider";
import styled from "styled-components";

const Styledhtital = styled.div `

width: 600px;
height: auto;
margin-top:10px;
margin-bottom:10px;
display:block;
margin-left:295px ;
`
const Styleh2 =styled.h2`

	margin: auto;
	padding: 5px;
	font-size :40px; 
	text-align:center;
	border:1px solid;
	border-radius: 5px;
`
const Stylep1 = styled.p`
    	margin-top: 10px;
	padding-top:5px;
	font-size :40px; 
	text-align:center;
	background-color: palevioletred;
	color:white;


`
const StyleCarouse = styled.div`
    width: 200px;
	height: 200px;
	margin: 10px;
	background-color: yellow;

`
const StyleCarouse2=styled.div`
    	width: 1000px;
	height: 1000px;
	display:block;
	padding:100px ;
	
	background-color: blue;
`
const Stylep2=styled.p`

	margin-top: 10px;
	padding-top:5px;
	font-size :40px; 
	text-align:center;
	background-color: palevioletred;
	color:white;
`



function Home() {
    
    return(<>





 <Styledhtital>
 <Styleh2>歡迎來手機購物&&手機租借網站</Styleh2>
 </Styledhtital>
 <Stylep1>最新消息</Stylep1>
<StyleCarouse>
    <p>輪播器</p>
</StyleCarouse>

 <Stylep2>熱賣商品</Stylep2>

    
            <StyleCarouse2>
                <SimpleSlider/>
            </StyleCarouse2>





      
    
  
    
    
    
    

    </>
    );
}

export default  Home