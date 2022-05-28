import './App.css';
import Navbar from './components/Navbar.js';
import Features from './components/Features.js';
import Register from './components/Register.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Features/>} />
          <Route path="/discounts" element={<Navbar/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
  );
}

export default App;
