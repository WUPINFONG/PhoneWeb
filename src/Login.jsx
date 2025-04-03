import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate('/');
  };

  // 表單樣式
  const Form1 = styled.form`
    width: 100%;
    max-width: 400px;
    padding: 20px;
    margin: 30px auto;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `;

  // 標題樣式
  const H5 = styled.h5`
    font-size: 30px;
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  `;

  // 表單行樣式
  const Formarow = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  `;

  // 標籤樣式
  const Lable = styled.label`
    font-size: 16px;
    font-weight: 500;
    color: #555;
    margin-bottom: 8px;
  `;

  // 輸入框樣式
  const Input1 = styled.input`
    width: 100%;
    height: 40px;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  `;

  // 按鈕樣式
  const Bt = styled.button`
    width: 100%;
    height: 45px;
    background-color: #007bff;
    color: white;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }

    &:disabled {
      background-color: #aaa;
      cursor: not-allowed;
    }
  `;

  return (
    <section className="section">
      <Form1 onSubmit={handleSubmit}>
        <H5>Login</H5>
        <Formarow>
          <Lable htmlFor="name">Name:</Lable>
          <Input1
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Formarow>
        <Formarow>
          <Lable htmlFor="email">Email:</Lable>
          <Input1
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Formarow>
        <Bt type="submit">Login</Bt>
      </Form1>
    </section>
  );
};

export default Login;
