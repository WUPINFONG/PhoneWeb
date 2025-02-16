import {Link,useParams} from 'react-router-dom';
import styled from 'styled-components';
import { useState ,useEffect} from 'react';

const fetchproducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products", { method: 'get' }) // 發送 GET 請求
      const data = await response.json() // 取得回傳的資料
      return data // 把取得的資料存放到 todos 中
    } catch (err) {
      console.log(err)
    }
  }
function SingleProduct() {
const [products, setproducts] = useState([]) // todos 的初始值為空陣列
const{productId}=useParams();

const product=products.find((item)=> item.id === productId);
console.log(product);
useEffect(async () => {
    const data =await fetchproducts()
   setproducts(data)
  }, [])

return(
    <>
    <div>
        {product.id}
        {product.producsname}
    </div>
    <Link to="/shopping">go shopping</Link>
    </>
);



};
export default SingleProduct;