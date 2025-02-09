import {Link,useParams} from 'react-router-dom';

import styled from 'styled-components';
import { useState ,useEffect} from 'react';

function SingleIpad() {
 // 取得所有事項
        const fetchproducts = async () => {
          try {
            const response = await fetch("http://localhost:3000/products", { method: 'get' }) // 發送 GET 請求
            const data = await response.json() // 取得回傳的資料
            setproducts(data) // 把取得的資料存放到 todos 中
          } catch (err) {
            console.log(err)
          }
        }
        const [products, setproducts] = useState([]) // todos 的初始值為空陣列
        useEffect(() => {
            fetchproducts()
          }, [])
          console.log(useParams());
          const{productId}=useParams();
          const product=products.find((product)=> products.id === productId);





return(
    <>
        <img src={image} alt={name}/>
        <h5>{name}</h5>
   
    <Link to="/shopping/ipad">go to back</Link>
    </>
);



};
export default SingleIpad;