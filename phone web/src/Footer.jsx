import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter= styled.footer`
	width:auto;
	height:auto;
	background-color: hsl(0, 0%, 50%);
	text-align:center;
	padding-top:10px;

    
`
const Staleda = styled(Link)`
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
    
    <Staleda to="">首頁</Staleda>
    <Staleda to="shopping">手機商場</Staleda>
    <Staleda to="phonelease">手機租借</Staleda>
    <Staleda to="contact-us">聯絡我們</Staleda>
    <p></p>
    <p>版權所有 © 2024 </p>
    </StyledFooter>
</>
);



}

export default Footer