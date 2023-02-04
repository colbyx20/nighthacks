import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/navbar';
import Button from './components/button';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
