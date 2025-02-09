import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Stylednav= styled.nav`
 background-color: blue;
    text-align:center;
   padding-top:10px;
`
const Staleda= styled.a`

font-size :20px; 
    text-decoration:none;
    margin: 10px; 
    color:hsl(0, 0%, 40%);
	font-weight:bold ;
    &:hover{
        color: hsl(0, 100%, 40%);
    }
`



function Navbar() {

return(
<>
<Stylednav>
    <Staleda href="/">首頁</Staleda>
    <Staleda href="/shopping">手機商場</Staleda>
    <Staleda href="/phonelease">手機租借</Staleda>
    <Staleda href="/contact-us">聯絡我們</Staleda>
    <Staleda href='/login'>會員登入</Staleda>
    


</Stylednav>
</>
);



}

export default Navbar;