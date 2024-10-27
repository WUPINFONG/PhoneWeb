import {Link,useParams} from 'react-router-dom';
import products from './data'

function SingleXiaomi() {
console.log(useParams());
const{XiaomiId}=useParams();
const product=products.find((product)=> product.id === XiaomiId);
const {image,name}=product;




return(
    <>
        <img src={image} alt={name}/>
        <h5>{name}</h5>
   
    <Link to="/shopping/Xiaomi">go to back</Link>
    </>
);



};
export default SingleXiaomi;