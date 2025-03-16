import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link,Outlet} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./SimpleSlider";
import styled from "styled-components";
import SimpleSlider2 from "./SimpleSlider2";
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
	padding-right:50px ;
	padding-left: 50px;
	padding-bottom: 50px;
	background-color:#D3D3D3;

`
const StyleCarouse2=styled.div`
	padding-right:50px ;
	padding-left: 50px;
	padding-bottom: 50px;
	
	
	background-color:	#D3D3D3;
	
	
`
const Stylep2=styled.p`

	
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
    <SimpleSlider2/>
</StyleCarouse>

 <Stylep2>熱賣商品</Stylep2>

    
            <StyleCarouse2>
                <SimpleSlider/>
            </StyleCarouse2>





      
    
  
    
    
    
    

    </>
    );
}

export default  Home