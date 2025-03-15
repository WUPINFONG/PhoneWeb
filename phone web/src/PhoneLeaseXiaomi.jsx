import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { useState ,useEffect} from 'react';
function PhoneLeaseXiaomi(){
        const fetchLeases = async () => {
          try {
            const response = await fetch("http://localhost:3000/lease?_start=23&_end=30", { method: 'get' }) // 發送 GET 請求
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

          
          const H1=styled.h1`
          font-size: 50px;
          margin-top:50px ;
          margin-left: 500px;
          `
          const Div= styled.div`
            width: 100%;
            height:100%;
            margin-top:40px;
              display:flex;
          
          `
          const Div2=styled.div`
            width: 300px;
            height:100%;
            
            margin:10px ;
          `
          const Div3=styled.div`
            width: 100%;
            height:100%;
            display:flex;
            flex-wrap: wrap;
          `
          const Outlink= styled.a`
              color:blue;
            font-size: 20px;
            font-weight:bold ;
            text-decoration:none;
              &:hover{
                  color: hsl(0, 100%, 40%);
              }
          `
          const Li=styled.li`
            padding: 5px;
            width:200px;
            font-size: 20px;
            border-bottom: 1px solid black;
            border-bottom-style:dotted;
          `
          const Img=styled.img`
            width: 250px;
            height: 200px;
            margin-bottom:5px ;
            margin-right: 10px;
              border-radius: 20px;
          
          `
          const Phonecard=styled.div`
            width:250px;
            height: 300px;
            border: 2px solid black;
            margin: 10px;
            border-radius: 5px;
          `
          const Carda =styled(Link)`
               color:blue;
               font-weight:bold ;
               text-decoration:none;
              &:hover{
                  color: hsl(0, 100%, 40%);
              }
          `
          const P1=styled.p`
              font-size: 20px;
            font-weight:bold ;
            padding-top:5px;
            text-align: center;
              margin-top:10px ;
              
          `
          const P2=styled.p`
          font-size: 20px;
          font-weight:bold ;
          padding-top:5px;
          text-align: center;
          margin-top:10px ;
          `
        return(<>
    
        <H1>手機租借</H1>
        <Div className="lease">
        
            <Div2 className="leaseleft">
            
                            <ul>
                              <Li><Outlink href='/phonelease/iphone'>apple iphone系列</Outlink></Li>
                              <Li><Outlink href='/phonelease/ipad'>apple ipad系列</Outlink></Li>
                              <Li><Outlink href='/phonelease/samsung'>三星系列</Outlink></Li>
                              <Li><Outlink href='/phonelease/Xiaomi'>小米系列</Outlink></Li>
                            </ul>
             </Div2>
             <Div3 className='leaseight'>
             {Lease.map((Lease)=>{
            return(
                <Carda to={`/phonelease-list/${Lease.id}`}>
                  <Phonecard className="phonecard">
                    <article key={Lease.id}>
                    
                    <Img src={Lease.image}/>
                    <P1>{Lease.producsname}</P1>
                    <P2>${Lease.price}</P2>
                </article>
                </Phonecard>
                </Carda>
                );
            })}
            </Div3>
        </Div>
        </>
    )
}
export default PhoneLeaseXiaomi