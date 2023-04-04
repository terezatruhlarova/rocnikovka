
import './App.css';
import Login from './Components/Login';
import React from 'react';
import Home from './Components/Home';

import Women from './Components/Women';
import Men from './Components/Men'
import Kids from './Components/Kids';
import ContactUs from './Components/ContactUs';
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
        <Route path='login' element={<Login />} />
        <Route path='contactus' element={<ContactUs/>} />
      </Routes>
    </>
  );
}

export default App;
