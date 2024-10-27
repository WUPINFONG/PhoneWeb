import {Link,useParams} from 'react-router-dom';
import products from './data'

function SingleIphone() {
console.log(useParams());
const{iphoneId}=useParams();
const product=products.find((product)=> product.id === iphoneId);
const {image,name}=product;




return(
    <>
        <img src={image} alt={name}/>
        <h5>{name}</h5>
   
    <Link to="/shopping/iphone">go to back</Link>
    </>
);



};
export default SingleIphone;