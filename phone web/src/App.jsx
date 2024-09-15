import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Home";
import Shopping from "./Shopping";
import PhoneLease from "./PhoneLease";
import About from "./About";
import ShareLaout from "./ShareLaout";

function App() {
  return(<>
    
    <BrowserRouter>
    
      <Routes>
          <Route path="/" element={<ShareLaout/>} >
          <Route index element={<Home/>}/>
          <Route path="shopping"element={<Shopping />} />
          <Route path='phonelease' element={<PhoneLease/>} />
          <Route path='about' element={<About/>} />
          
          </Route>
         
   
        
        
        
      </Routes>
      
    </BrowserRouter>
    </>
);
  
}

export default App
