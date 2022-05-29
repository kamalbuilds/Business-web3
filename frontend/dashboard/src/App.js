import './App.css';
import Navbar from './components/Navbar.js';
import Features from './components/Features.js';
import Register from './components/Register.js';
import Products from './components/Productlisting.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from './components/Banner.js'
import Main1 from './components/Main1.js';
import Main2 from './components/Main2.js';
import Info from './components/Info.js';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<div>  <Main1 />,<Info />,<Main2 /></div>} />
          <Route exact path="/customer" element={<Features/>} />
          <Route path="/products" element={<div> <Navbar/> ,<Banner />, <Products /></div>} />
          <Route path="/register" element={<div> <Navbar />,<Register/> </div>} />
        </Routes>
      </Router>
  );
}

export default App;
