import { BrowserRouter,Routes,Route } from "react-router-dom"
import { useState } from "react";
import Home from "./Home";
import Shopping from "./Shopping";
import PhoneLease from "./PhoneLease";
import Contactus from "./Contactus";
import ShareLaout from "./ShareLaout";
import SingleProduct from "./SingleProduct"
import ShoppingIphone from "./ShoppingIphone";
import ShoppingIpad from "./ShoppingIpad";
import ShoppingSamsung from "./ShoppingSamsung";
import ShoppingXiaomi from "./ShoppingXiaomi";
import PhoneLeaseIphone from "./PhoneLeaseIphone";
import PhoneLeaseIpad from "./PhoneLeaseIpad";
import PhoneLeaseSamsung from "./PhoneLeaseSamsung";
import PhoneLeaseXiaomi from "./PhoneLeaseXiaomi";
import SingleLease from "./SingleLease";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {

const [user,setUser]=useState(null);
  return(<>
    <Navbar></Navbar>
    <BrowserRouter basename='/phoneWeb'>
    
      <Routes>
          <Route path="/" element={<ShareLaout/>} />
          <Route index element={<Home/>}/>
          <Route path="/shopping" element={<Shopping />} />
          
          
          <Route path="shopping/iphone" element={<ShoppingIphone/>}/>
          <Route path="shopping/ipad" element={<ShoppingIpad/>}/>
          <Route path="shopping/samsung" element={<ShoppingSamsung/>}/>
          <Route path="shopping/Xiaomi" element={<ShoppingXiaomi/>}/>    
          <Route path="/shopping-list/:productId" element={<SingleProduct/>}/>  

          <Route path='phonelease' element={<PhoneLease/>} />
          <Route path="phonelease/iphone" element={<PhoneLeaseIphone/>}/>
          <Route path="phonelease/ipad" element={<PhoneLeaseIpad/>}/>
          <Route path="phonelease/samsung" element={<PhoneLeaseSamsung/>}/>
          <Route path="/phonelease/Xiaomi" element={<PhoneLeaseXiaomi/>}/>
          
          <Route path="phonelease-list/:leaseId" element={<SingleLease />} />
          <Route path='contact-us/' element={<Contactus/>} />
          <Route path="login" element={<Login setUser={setUser}/>}/>
          <Route path="dashboard" element={<Dashboard user={user}/>}/>
         
         
        
        
        
      </Routes>
      
    </BrowserRouter>
    <Footer></Footer>
    </>
);
  
};

export default App;
