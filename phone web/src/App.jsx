import { BrowserRouter,Routes,Route } from "react-router-dom"
import { useState } from "react";
import Home from "./Home";
import Shopping from "./Shopping";
import PhoneLease from "./PhoneLease";
import About from "./About";
import ShareLaout from "./ShareLaout";
import SingleProduct from "./SingleProduct";
import ShoppingIphone from "./ShoppingIphone";
import ShoppingIpad from "./ShoppingIpad";
import ShoppingSamsung from "./ShoppingSamsung";
import ShoppingXiaomi from "./ShoppingXiaomi";
import SingleIphone from "./SingleIphone";
import SingleIpad from "./SingleIpad";
import SingleSamsung from "./SingleSamsung";
import SingleXiaomi from "./SingleXiaomi";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {

const [user,setUser]=useState(null);
  return(<>
    <Navbar></Navbar>
    <BrowserRouter>
    
      <Routes>
          <Route path="/" element={<ShareLaout/>} />
          <Route index element={<Home/>}/>
          <Route path="shopping" element={<Shopping />} />
          
          
          <Route path="shopping/iphone" element={<ShoppingIphone/>}/>
          <Route path="shopping/iphone/:iphoneId" element={<SingleIphone/>}/>   

          <Route path="shopping/ipad" element={<ShoppingIpad/>}/>
          <Route path="shopping/ipad/:ipadId" element={<SingleIpad/>}/>   

          <Route path="shopping/samsung" element={<ShoppingSamsung/>}/>
          <Route path="shopping/samsung/:samsungId" element={<SingleSamsung/>}/>

          <Route path="shopping/Xiaomi" element={<ShoppingXiaomi/>}/>    
          <Route path="shopping/Xiaomi/:XiaomiId" element={<SingleXiaomi/>}/>

          <Route path='phonelease' element={<PhoneLease/>} />
          <Route path='about' element={<About/>} />
          <Route path="login" element={<Login setUser={setUser}/>}/>
          <Route path="dashboard" element={<Dashboard user={user}/>}/>
         
   
        
        
        
      </Routes>
      
    </BrowserRouter>
    <Footer></Footer>
    </>
);
  
};

export default App;
