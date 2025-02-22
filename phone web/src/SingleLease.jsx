import {Link,useParams} from 'react-router-dom';
import styled from 'styled-components';
import { useState ,useEffect} from 'react';

const fetchLeases = async () => {
    try {
      const response = await fetch("http://localhost:3000/lease", { method: 'get' }) // 發送 GET 請求
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
    <div>
        {Leases.id}
       
    </div>
    <Link to="/phonelease">go phonelease</Link>
    </>
);
}
export default  SingleLease

