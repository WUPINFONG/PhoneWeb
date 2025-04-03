import {Link,useParams} from 'react-router-dom';
import styled from 'styled-components';
import { useState ,useEffect} from 'react';

const Div = styled.div`
  margin-left: 200px;
  margin-right: 200px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const Div0 = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Div1 = styled.div`
  width: 350px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Div2 = styled.div`
  width: 300px;
  margin-left: 20px;
  padding-top: 50px;
  text-align: center;

  @media (max-width: 768px) {
    width: 80%;
    padding-top: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding-top: 10px;
  }
`;

const P1 = styled.p`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const P2 = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #e74c3c;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Div4 = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const Bt1 = styled.button`
  font-size: 14px;
  font-weight: bold;
  height: 50px;
  width: 150px;
  background-color: #3498db;
  color: white;
  border: 1px solid #3498db;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Bt2 = styled.button`
  font-size: 14px;
  font-weight: bold;
  height: 50px;
  width: 150px;
  background-color: #2ecc71;
  color: white;
  border: 1px solid #2ecc71;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #27ae60;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Div3 = styled.div`
  margin-top: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const P3 = styled.p`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const P4 = styled.p`
  font-size: 18px;
  text-align: justify;
  color: #555;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Bt3 = styled.button`
  font-size: 14px;
  font-weight: bold;
  height: 50px;
  width: 250px;
  background-color: gray;
  color: white;
  border: 1px solid gray;
  border-radius: 5px;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f39c12;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const AA1 = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  color: black;

  &:hover {
    color: #e74c3c;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const fetchLeases = async () => {
    try {
      const response = await fetch(`${API_URL}/lease`, { method: 'get' }) // 發送 GET 請求
      const data = await response.json() // 取得回傳的資料
      console.log("API 回傳的 Lease :", data);
      return data ;// 把取得的資料存放到 todos 中
    } catch (err) {
      console.error("Error fetching Lease :", err);
      return [];
  }
};
  
function SingleLease(){
const [Lease, setLease] = useState([]) // todos 的初始值為空陣列
const{leaseId}=useParams();
const [loading, setLoading] = useState(true);
useEffect(() => {
    const getLease = async () => {
        console.log("開始取得產品資料...");
        setLoading(true);
        const data = await fetchLeases();
        setLease(data);
        setLoading(false);
    };
    getLease();
}, []);

if (loading) return <p>載入中...</p>;

console.log("所有產品:", Lease); // ✅ 確保 products 有資料
const Leases = Lease.find((item) => item.id === leaseId);
console.log("找到的產品:", Leases); // ✅ 確保 product 被正確找到

if (!Leases) return <p>產品未找到</p>;



    return(

      <>
    <Div>
    <Div0> 
    <Div1>  
      <Img src={Leases.image} />
     </Div1> 
     <Div2>
        <P1>{Leases.producsname}</P1>
        <P2>NT${Leases.price}</P2>
        <Div4>
        <Bt1>直接購買</Bt1>
        <Bt2>加入購物車</Bt2>
        </Div4>
    </Div2>
    </Div0> 
    <Div3>
      <P3>產品介紹</P3>
      <P4>{Leases.introduction}</P4>
    </Div3>
    <Bt3><AA1 to="/phonelease">回手機租借</AA1></Bt3>
  
    </Div>
    

    </>
);
}
export default  SingleLease

