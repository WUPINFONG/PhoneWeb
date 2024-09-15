import {Link} from 'react-router-dom';

function Navbar() {

return(
<>
<nav className='navbar'>
    <Link to="/">首頁</Link>
    <Link to="/shopping">手機商場</Link>
    <Link to="/phonelease">手機租借</Link>
    <Link to="/about">關於我們</Link>
    


</nav>
</>
);



}

export default Navbar