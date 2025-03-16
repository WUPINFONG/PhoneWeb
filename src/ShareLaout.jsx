import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link,Outlet} from 'react-router-dom'
function Home() {
    
    return(<>
    <Navbar/>

     <Outlet/>
   
    
    
    <Footer/>
    

    </>
    );
}

export default  Home