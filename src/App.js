import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Home} from "./Pages/Home";
import {Transportation} from "./Pages/Transportation";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transportation" element={<Transportation />} />
    </Routes>
  );
}

export default App;
