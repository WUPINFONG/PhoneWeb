import products from './data'
import { Link } from 'react-router-dom';
function ShoppingIphone() {
return(
    <section className='section'>
    <h2>produts</h2>
    <div className='products'>
    {products.map((product)=>{
    return(
            <article key={product.id}>
                <h5>{product.name}</h5>
            <Link to={`/shopping/iphone/${product.id}`}>more info</Link>
            </article>
            );
        })}
    </div>
    
    </section>
);
};
export default ShoppingIphone;