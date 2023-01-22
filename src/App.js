import { Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
