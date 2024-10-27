import {Link,useParams} from 'react-router-dom';
import products from './data'

function SingleIpad() {
console.log(useParams());
const{ipadId}=useParams();
const product=products.find((product)=> product.id === ipadId);
const {image,name}=product;




return(
    <>
        <img src={image} alt={name}/>
        <h5>{name}</h5>
   
    <Link to="/shopping/ipad">go to back</Link>
    </>
);



};
export default SingleIpad;