import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate('/dashboard');
  };

  const Form1 =styled.form`
  width: 500px;
  height: 300px;
  display: block;
  border: 1px solid;
  border-radius: 5px;
  margin-top: 30px;
  margin-left:300px ;
  margin-right:300px ;
  margin-bottom:200px ;
  
  
  `
  const H5 =styled.h5`

    font-size: 30px;
    text-align: center;
    margin: 5px;
    color: black;
  `
  const Formarow =styled.div`
  margin-top: 10px;
  margin-right: 70px;
  margin-left:50px;
  margin-bottom: 10px;
  

  display: block;
  `
  const Lable =styled.label`
  text-align: center;
  font-size: 15px;
  margin-right:5px ;
  `
  const Input1= styled.input`
  width: 300px;
  `
  const Bt=styled.button`
  width: 100px;
  height: 50px;
  display: block;
  margin-top: 50px;
  margin-right: 70px;
  margin-left:200px;

  color:blue;
  &:hover{
        color: hsl(0, 100%, 40%);
        background-color: blue;
    }
  
  
  
  `


  return (<>
    <section className='section'>
      <Form1 className='form' onSubmit={handleSubmit}>
        <H5>login</H5>
        <Formarow className='form-row'>
          <Lable htmlFor='name' className='form-label'>
            name:
          </Lable>
          <Input1
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Formarow>
        <Formarow  className='form-row'>
          <Lable htmlFor='email' className='form-label'>
            email:
          </Lable>
          <Input1
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Formarow >
        <Bt type='submit' className='btn btn-block'>
          login
        </Bt>
      </Form1>
    </section>
    
    </>
  );
};
export default Login;
