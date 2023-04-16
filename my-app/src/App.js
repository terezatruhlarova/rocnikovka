
import './App.css';
import React from 'react';
import Login from './Components/Login';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Women from './Components/Women';
import Men from './Components/Men'
import Kids from './Components/Kids';
import ContactUs from './Components/ContactUs';
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";





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
      <Footer/>
    </>
  );
}

export default App;
