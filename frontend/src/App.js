import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Button from './components/button';
import Home from './pages/home';
import AboutUs from './pages/aboutus';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs/>} />

      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
