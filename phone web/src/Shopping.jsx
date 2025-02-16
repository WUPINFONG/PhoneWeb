
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { useState ,useEffect} from 'react';
function Shopping() {

    const [products, setproducts] = useState([]) // todos 的初始值為空陣列

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

        useEffect(() => {
            fetchproducts()
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
const Carda =styled.a`
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
        <H1>手機商場</H1>
        <Div className="shop">
        
            <Div2 className="shopleft">
                <ul>
                    <Li><Outlink href='/shopping/iphone'>apple iphone系列</Outlink></Li>
                    <Li><Outlink href='/shopping/ipad'>apple ipad系列</Outlink></Li>
                    <Li><Outlink href='/shopping/samsung'>三星系列</Outlink></Li>
                    <Li><Outlink href='/shopping/Xiaomi'>小米系列</Outlink></Li>
                    
                </ul>
            </Div2>
        <Div3 className='shopright'>
        {products.map((products)=>{
        return(
       
            <Carda href={`/shopping-list/${products.id}`}>
            <Phonecard className="phonecard">
                <article key={products.id}>
                
                <Img src={products.image}/>
                <P1>{products.producsname}</P1>
                <P2>${products.price}</P2>
            </article>
            </Phonecard>
            </Carda>
        
            );
        })}
        </Div3>
    
</Div>
</>
    );
}
export default  Shopping