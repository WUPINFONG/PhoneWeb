import {Link,useParams} from 'react-router-dom';
import styled from 'styled-components';
import { useState ,useEffect} from 'react';

const Div=styled.div`

margin-left:200px ;
margin-right:200px;


`
const Div0=styled.div`
height: 350px;
width: auto;
display:flex;
flex-wrap: nowrap;
`
const Div1=styled.div`
height: 350px;
width: 350px;

`
const Div2=styled.div`
height: 350px;
width: 300px;
margin-left:40px ;
padding-top:100px ;
`
const Div3=styled.div`
height  :200px ;
width: auto;
margin-top:10px ;
margin-left:50px ;
margin-right:50px ;
margin-bottom:30px ;
`
const Div4=styled.div`
margin-top:10px ;
margin-left:30px ;
height  :100px ;
width: auto;
`
const Div5=styled.div`
height  :110px ;
width: auto;
margin-left:250px ;
margin-right:200px ;
padding-bottom: 20px;
`
const Img=styled.img`
        width:350px;
        height:300px;
        margin: 10px;
        border: 2px solid black;
 `
 const P1=styled.p`
  font-size: 25px;
  font-weight:bold ;
  text-align: center;       
 `
const P2=styled.p`
font-size: 20px;
font-weight:bold ;
padding-left: 35px;
margin-top:20px ;

color: red;
` 
const P3=styled.p`
font-size: 30px;
font-weight:bold ;
padding-left: 10px;
text-align: center;
`
const P4=styled.p`
font-size: 20px;
font-weight:bold ;
margin: 20px;

`
const Bt1=styled.button`
font-size: 10px;
font-weight:bold ;
height: 50px;
width: 100px;
background-color: rgb(128, 128, 128);
color: white;
border: 1px solid black;
margin-right: 10px;
&:hover{
              color: hsl(0, 100%, 40%);
              background-color: yellow;
          }
`
const Bt2=styled.button`
font-size: 10px;
font-weight:bold ;
height: 50px;
width: 100px;
background-color: gray;
color: white;
border: 1px solid black;
&:hover{
              color: hsl(0, 100%, 40%);
              background-color: yellow;
          }
`
const Bt3=styled.button`
height: 100px;
width: 250px;
margin-top:20px ;

background-color: gray;

border: 1px solid black;
&:hover{
              color: hsl(0, 100%, 40%);
              background-color: yellow;
          }
`
const AA1=styled(Link)`
font-size: 18px;
font-weight:bold ;
  text-decoration:none;
  text-align: center;
  color: black;
  &:hover{
              color: hsl(0, 100%, 40%);
             
          }
`
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const fetchproducts = async () => {
    try {
      const response = await fetch(`${API_URL}/products`, { method: 'get' }) // 發送 GET 請求
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
    <Div>
    <Div0> 
    <Div1>
        
      <Img src={product.image} />
     </Div1> 
     <Div2>
      
        <P1>{product.producsname}</P1>
        
        <P2>NT${product.price}</P2>
        <Div4>
        <Bt1>直接購買</Bt1>
        <Bt2>加入購物車</Bt2>
        </Div4>
    </Div2>
    </Div0> 
    
    <Div3>
      <P3>產品介紹</P3>
      <P4>{product.introduction}</P4>
    
    </Div3>
    <Div5>
    <Bt3><AA1 to="/shopping">回商品頁</AA1></Bt3>
    </Div5>
    </Div>
);
}
export default SingleProduct
