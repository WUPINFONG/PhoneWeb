import {Link,useParams} from 'react-router-dom';
import products from './data'

function SingleSamsung() {
console.log(useParams());
const{samsungId}=useParams();
const product=products.find((product)=> product.id === samsungId);
const {image,name}=product;




return(
    <>
        <img src={image} alt={name}/>
        <h5>{name}</h5>
   
    <Link to="/shopping/samsung">go to back</Link>
    </>
);



};
export default SingleSamsung;