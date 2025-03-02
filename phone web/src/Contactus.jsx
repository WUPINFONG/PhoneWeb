import { useState } from "react";
import styled from "styled-components";
const H1= styled.h2`
padding-top:20px ;
text-align: center; 
margin-left:200px ;
margin-right:200px ;
font-size: 45px;
font-weight:bold ;
`
const Form1 =styled.form`
  width: 500px;
  height: 450px;
  display: block;
  border: 1px solid;
  border-radius: 5px;
  margin-top: 30px;
  margin-left:300px ;
  margin-right:300px ;
  margin-bottom:200px ;
  
`
const Div1 =styled.div`
padding-top:20px ;
margin-left: 100px;
margin-right: 100px;
margin-bottom: 10px;
`
const Div2 =styled.div`
margin-left: 100px;
margin-right: 100px;
margin-bottom: 10px;
`
const Div3 =styled.div`
margin-left: 100px;
margin-right: 100px;
margin-bottom: 10px;
`
const Div4 =styled.div`
margin-left: 100px;
margin-right: 100px;
margin-bottom: 10px;

`
const Div5 =styled.div`


margin-left: 110px;
margin-right: 100px;
margin-bottom: 10px;
padding-top: 10px;
`

const Txt=styled.label`
font-size: 18px;
font-weight:bold ;
`

const Txt1=styled.textarea`
font-size: 14px;
font-weight:bold ;
width: 250px;
height: 150px;`
const Txt2=styled.label`
margin-left:205px ;
font-size: 20px;
font-weight:bold ;
text-align: center; 

`
const INput=styled.input`
width:200px;
height: 20px;
`

const Bt1=styled.button`
font-size: 10px;
font-weight:bold ;
height: 50px;
width: 200px;
background-color: rgb(128, 128, 128);
color: white;
border: 1px solid black;
margin-left:130px;
margin-top:10px ;
&:hover{
              color: hsl(0, 100%, 40%);
              background-color: yellow;
          }
`


function Contactus() {
    const [inputName, setInputName] = useState('');
    const [inputTel, setInputTel] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = {
            name: inputName,
            tel: inputTel,
            email: inputEmail,
            title: inputTitle,
            message: inputMessage,
        };

        try {
            const response = await fetch("http://localhost:3000/Contactus", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("✅ 表單提交成功！"); // 🔥 顯示成功視窗
                setInputName('');
                setInputTel('');
                setInputEmail('');
                setInputTitle('');
                setInputMessage('');
            } else {
                alert("❌ 提交失敗，請稍後再試！");
            }
        } catch (error) {
            console.error("提交錯誤:", error);
            alert("⚠️ 伺服器錯誤，請稍後再試！");
        }

        setIsSubmitting(false);
    };

    return (
        <>
            <H1>歡迎有任何問題於下方填寫表單</H1>
            <Form1 onSubmit={handleSubmit}>
                <Div1>
                    <Txt htmlFor="name">姓名:</Txt>
                    <INput type="text" id="name" value={inputName} onChange={(e) => setInputName(e.target.value)} required />
                </Div1>
                <Div2>
                    <Txt htmlFor="tel">電話:</Txt>
                    <INput type="text" id="tel" maxLength="10" value={inputTel} onChange={(e) => setInputTel(e.target.value)} required />
                </Div2>
                <Div3>
                    <Txt htmlFor="email">Email:</Txt>
                    <INput type="email" id="email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} required />
                </Div3>
                <Div4>
                    <Txt htmlFor="title">標題:</Txt>
                    <INput type="text" id="title" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} required />
                </Div4>
                <Txt2 htmlFor="message">內容</Txt2>
                <Div5>
                    
                    <Txt1 id="message" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} required></Txt1>
                </Div5>
                <Bt1 type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "送出中..." : "送出"}
                </Bt1>
            </Form1>
        </>
    );
}

export default Contactus;