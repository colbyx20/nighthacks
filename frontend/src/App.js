import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Button from './components/button';
import Home from './pages/home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
