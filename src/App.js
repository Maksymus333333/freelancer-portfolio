import "./styles/main.css";

 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Calculator from "./pages/Calculator";
import ScrollToTop from "./utils/scrollToTop";





function App() {
  return (  
    <div className="App">

      <Router>

      <ScrollToTop/>
      
      <Navbar/>
  
    <Routes>
      <Route path ="/" element = {<Home />} />
      <Route path ="Projects" element = {<Projects />} />
      <Route path ="Contacts" element = {<Contacts />} />
      <Route path ="Calculator" element = {<Calculator />} />
    </Routes>
    
     <Footer/>

      </Router>
   
    </div>
  );
}

export default App;
