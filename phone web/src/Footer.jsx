import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter= styled.footer`
	width:auto;
	height:auto;
	background-color: hsl(0, 0%, 50%);
	text-align:center;
	padding-top:10px;
`
const Staleda= styled.a`

color:white;
	font-size: 20px;
	font-weight:bold ;
	text-decoration:none;
	margin-right: 10px;
    &:hover{
        color: hsl(0, 100%, 40%);
    }
`


function Footer() {

return(
<>
<StyledFooter>
    
    <Staleda href="/">首頁</Staleda>
    <Staleda href="/shopping">手機商場</Staleda>
    <Staleda href="/phonelease">手機租借</Staleda>
    <Staleda href="/about">關於我們</Staleda>
    <p>版權所有 © 2024 </p>
    </StyledFooter>
</>
);



}

export default Footer