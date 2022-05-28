import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Features from './components/Features.js';
import Register from './components/Register.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Features />
      <Register />
      
    </div>
  );
}

export default App;
