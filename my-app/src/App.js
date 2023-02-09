
import './App.css';
import Login from './Components/Login';
import React from 'react';
import Home from './Components/Home';

import Women from './Components/Women';
import Men from './Components/Men'
import Kids from './Components/Kids';
import Info from './Components/Info';
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";




function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact index path='/' element={<Home />} />
        <Route path='women' element={<Women />} />
        <Route path='men' element={<Men />} />
        <Route path='kids' element={<Kids />} />
        <Route path='signin' element={<Login />} />
        <Route path='info' element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
