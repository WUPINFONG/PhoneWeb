
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Shopping() {

    return(
    <>
 
        <div className="shop">
            <div className="shopleft">
                <ul>
                    <li><Link to='iphone'>apple iphone系列</Link></li>
                    <li><Link to='ipad'>apple ipad系列</Link></li>
                    <li><Link to='samsung'>三星系列</Link></li>
                    <li><Link to='Xiaomi'>小米系列</Link></li>
                    
                </ul>
            </div>
        <div className="shopright">
            <div className="phonecard">
                <img className="phoneimg"src="https://www.jyes.com.tw/data/goods/gallery/202309/1695781472535302600.jpg"/>
                <p>iphone15</p>
                <p>$26000</p>

            </div>
            <div className="phonecard">
                <img className="phoneimg"src="https://www.jyes.com.tw/data/goods/gallery/202309/1695781472535302600.jpg"/>
                <p>iphone15</p>
                <p>$26000</p>

            </div>
            <div className="phonecard">
                <img className="phoneimg"src="https://www.jyes.com.tw/data/goods/gallery/202309/1695781472535302600.jpg"/>
                <p>iphone15</p>
                <p>$26000</p>

            </div>
            <div className="phonecard">
                <img className="phoneimg"src="https://www.jyes.com.tw/data/goods/gallery/202309/1695781472535302600.jpg"/>
                <p>iphone15</p>
                <p>$26000</p>

            </div>

        </div>
        
         </div>
    

  
    </>
);

}
export default  Shopping