import {Link,useParams} from 'react-router-dom';
import styled from 'styled-components';
import { useState ,useEffect} from 'react';

const fetchproducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products", { method: 'get' }) // 發送 GET 請求
      const data = await response.json() // 取得回傳的資料
      console.log("API 回傳的 products:", data);
      return data ;// 把取得的資料存放到 todos 中
    } catch (err) {
        console.error("Error fetching products:", err);
        return [];
    }
};
function SingleProduct() {
const [products, setproducts] = useState([]) // todos 的初始值為空陣列
const{productId}=useParams();
const [loading, setLoading] = useState(true);
//const product=products.find((item)=> item.id === productId);
//const product = products.find((item) => item.id === Number(productId));
//console.log('找到商品:',product);

//useEffect(async () => {
 //   const data =await fetchproducts()
 //  setproducts(data)
 // }, [])
 useEffect(() => {
    const getProducts = async () => {
        console.log("開始取得產品資料...");
        setLoading(true);
        const data = await fetchproducts();
        setproducts(data);
        setLoading(false);
    };
    getProducts();
}, []);

if (loading) return <p>載入中...</p>;

console.log("所有產品:", products); // ✅ 確保 products 有資料
const product = products.find((item) => item.id === productId);
console.log("找到的產品:", product); // ✅ 確保 product 被正確找到

if (!product) return <p>產品未找到</p>;

return(
    <>
    <div>
    {product.id}
    {product.producsname}    
    </div>
    <Link to="/shopping">go shopping</Link>
    </>
);
}
export default SingleProduct
