import products from './data'
import { Link } from 'react-router-dom';
function ShoppingSamsung() {
return(
    <section className='section'>
    <h2>produts</h2>
    <div className='products'>
    {products.map((product)=>{
    return(
            <article key={product.id}>
                <h5>{product.name}</h5>
            <Link to={`/shopping/samsung/${product.id}`}>more info</Link>
            </article>
            );
        })}
    </div>
    
    </section>
);
};
export default ShoppingSamsung;