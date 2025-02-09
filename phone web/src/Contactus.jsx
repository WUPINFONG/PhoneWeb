import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { useState ,useEffect} from 'react';

function Contactus() {
    const [inputName, setInputName] = useState('')
    const [inputTel, setInputTel] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputTital, setInputTital] = useState('')
    const [inpuMessage, setInpuMessage] = useState('')

    return(
    <>
 
        <h2>歡迎有任何問題於下方填寫表單</h2>
        <from>
        <div>
        <label forj="name">姓名:</label>
        <input type='text'/>
        </div>
        <div>
        <label for="tel">電話:</label>
        <input type='text' id='tel' maxlength='10' required/>
        </div>
        <div>
        <label for="email">Email:</label>
        <input type='email'id='email'/>
        </div>
        <div>
        <label for="tital">標題:</label>
        <input type='text'/>
        </div>
        <div>
        <label >內容:</label>
        <textarea name='message'></textarea>
        </div>
        <button type="submit">送出</button>

        </from>
        
         
    

  
    </>
);

}
export default  Contactus