import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { useState ,useEffect} from 'react';
function PhoneLeaseSamsung(){
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
        const fetchLeases = async () => {
          try {
            const response = await fetch(`${API_URL}/lease?_start=17&_end=22`, { method: 'get' }) // 發送 GET 請求
            const data = await response.json() // 取得回傳的資料
            setLease(data) // 把取得的資料存放到 todos 中
          } catch (err) {
            console.log(err)
          }
        }
        const [Lease, setLease] = useState([]) // todos 的初始值為空陣列
        useEffect(() => {
            fetchLeases()
          }, [])

          
           // 🔹 主頁面背景
   const PageContainer = styled.div`
   min-height: 100vh;
   background: linear-gradient(135deg, #f3f4f6, #d1d5db); /* ✅ 漸層背景 */
   padding: 20px;
 `;

 // 🔹 標題
 const H1 = styled.h1`
   font-size: 50px;
   margin: 30px 0;
   text-align: center;
   color: #333;
 `;

 // 🔹 主要佈局
 const ShopContainer = styled.div`
   display: flex;
   justify-content: center;
   gap: 20px;
   max-width: 1200px;
   margin: 0 auto;
   padding: 20px;

   @media (max-width: 768px) {
     flex-direction: column;
     align-items: center;
   }
 `;

 // 左側分類區塊
 const CategoryList = styled.div`
   width: 250px;
   padding: 20px;
   background: white; /* ✅ 白色背景 */
   border-radius: 10px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */

   @media (max-width: 768px) {
     width: 90%;
   }
 `;

 // 分類連結
 const CategoryLink = styled(Link)`
   display: block;
   color: #333;
   font-size: 18px;
   font-weight: bold;
   padding: 10px 0;
   text-decoration: none;
   transition: color 0.3s, transform 0.2s;

   &:hover {
     color: #ff4500; /* ✅ 滑鼠移上去變橘色 */
     transform: translateX(5px); /* ✅ 滑鼠移上去往右微移動 */
   }
 `;

 // 產品網格
 const ProductsGrid = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
   justify-content: center;
 `;

 //  單個產品卡片
 const ProductCard = styled(Link)`
   width: 260px;
   background: white;
   border-radius: 10px;
   padding: 15px;
   text-align: center;
   text-decoration: none;
   color: inherit;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* ✅ 陰影增加立體感 */
   transition: transform 0.3s, box-shadow 0.3s;

   &:hover {
     transform: scale(1.05); /* ✅ 滑鼠移上去放大 */
     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
   }
 `;

 // 🔹 產品圖片
 const ProductImage = styled.img`
   width: 100%;
   height: auto;
   border-radius: 10px;
 `;

 // 🔹 產品名稱
 const ProductName = styled.p`
   font-size: 18px;
   font-weight: bold;
   margin-top: 10px;
   color: #333;
 `;

 // 🔹 產品價格
 const ProductPrice = styled.p`
   font-size: 16px;
   color: #e60000; /* ✅ 紅色價格 */
   margin-top: 5px;
 `;
    return(
    <>
    <PageContainer>
    <H1>手機租借</H1>
    <ShopContainer>
    {/* 左側分類 */}
    <CategoryList> 
      <ul>
          <li><CategoryLink to='/phonelease/iphone'>apple iphone系列</CategoryLink></li>
          <li><CategoryLink to='/phonelease/ipad'>apple ipad系列</CategoryLink></li>
          <li><CategoryLink to='/phonelease/samsung'>三星系列</CategoryLink></li>
          <li><CategoryLink to='/phonelease/Xiaomi'>小米系列</CategoryLink></li>
      </ul>
    </CategoryList>
    {/* 右側商品列表 */}
    <ProductsGrid>
         {Lease.map((Lease)=>(
        
        <ProductCard key={Lease.id} to={`/phonelease/phonelease-list/${Lease.id}`}>        
        <ProductImage src={Lease.image} alt={Lease.producsname}/>
        <ProductName>{Lease.producsname}</ProductName>
        <ProductPrice>${Lease.price}</ProductPrice>
        </ProductCard>
          ))}
      </ProductsGrid>
        </ShopContainer>
      </PageContainer>
    </>
    );
  }
export default PhoneLeaseSamsung
    