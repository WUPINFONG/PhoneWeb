import { useState } from "react";
import styled from "styled-components";

// 標題樣式
const H1 = styled.h2`
  padding-top: 20px;
  text-align: center;
  font-size: 45px;
  font-weight: bold;
  margin: 0 20px;
  color: #333;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

// 表單容器樣式
const Form1 = styled.form`
  width: 500px;
  padding: 20px;
  margin: 30px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

// 單一欄位樣式
const Div = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// 標籤樣式
const Txt = styled.label`
  font-size: 18px;
  font-weight: bold;
  color: #444;
`;

// 輸入框樣式
const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;

  &:focus {
    border-color: #4a90e2;
    outline: none;
  }
`;

// Textarea樣式
const Txt1 = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  resize: none;

  &:focus {
    border-color: #4a90e2;
    outline: none;
  }
`;

// 按鈕樣式
const Bt1 = styled.button`
  width: 100%;
  height: 45px;
  background-color: #4a90e2;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357abd;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

function Contactus() {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
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
      const response = await fetch(`${API_URL}/Contactus`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ 表單提交成功！");
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
        <Div>
          <Txt htmlFor="name">姓名:</Txt>
          <Input
            type="text"
            id="name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            required
          />
        </Div>
        <Div>
          <Txt htmlFor="tel">電話:</Txt>
          <Input
            type="text"
            id="tel"
            maxLength="10"
            value={inputTel}
            onChange={(e) => setInputTel(e.target.value)}
            required
          />
        </Div>
        <Div>
          <Txt htmlFor="email">Email:</Txt>
          <Input
            type="email"
            id="email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            required
          />
        </Div>
        <Div>
          <Txt htmlFor="title">標題:</Txt>
          <Input
            type="text"
            id="title"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            required
          />
        </Div>
        <Div>
          <Txt htmlFor="message">內容:</Txt>
          <Txt1
            id="message"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            required
          />
        </Div>
        <Bt1 type="submit" disabled={isSubmitting}>
          {isSubmitting ? "送出中..." : "送出"}
        </Bt1>
      </Form1>
    </>
  );
}

export default Contactus;
