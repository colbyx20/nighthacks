import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Button from './components/button';
import Home from './pages/home';
import AboutUs from './pages/aboutus';
import Counselors from "./pages/counselors";
import Faqs from "./pages/faqs";
import Tips from "./pages/tips";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Counselors" element={<Counselors/>} />
        <Route path="/Faqs" element={<Faqs/>} />
        <Route path="/Tips" element={<Tips/>} />



      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
