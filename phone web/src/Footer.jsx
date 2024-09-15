import {Link} from 'react-router-dom';

function Footer() {

return(
<>
<footer className='footer'>
    
    <Link to="/">首頁</Link>
    <Link to="/shopping">手機商場</Link>
    <Link to="/phonelease">手機租借</Link>
    <Link to="/about">關於我們</Link>
    <p>版權所有 © 2024 </p>
    </footer>
</>
);



}

export default Footer