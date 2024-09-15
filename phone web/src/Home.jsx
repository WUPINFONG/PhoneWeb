import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link,Outlet} from 'react-router-dom'
import Carousel1 from "./Carousel1";
function Home() {
    
    return(<>

 <div className="htital">
 <h2 className="h-h2">歡迎來手機購物&&手機租借網站</h2>
 </div>
 <p className="h-p2-text">最新消息</p>
<div className="h-carouse">
    <p>輪播器</p>
</div>

 <p className="h-hot-pd-text">熱賣商品</p>

    
            <div className="h-carouse2">
                <p>輪播器</p>
            </div>





      
    
  
    
    
    
    

    </>
    );
}

export default  Home