
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import React from 'react';
import Home from './Components/Home';

import Women from './Components/Women';
import Men from './Components/Men'
import Kids from './Components/Kids';
import Info from './Components/Info';
import {BrowserRouter as Router, Route, } from 'react-router-dom';





function App() {
  return (
    <>
     <Router>
      <Navbar/>
      <switch>  
        <Route path='/home' component = {Home} exact>
          <Home/>
        </Route>
        <Route path='/women' component = {Women} exact>
          <Women/>
        </Route>
        <Route path='/men' component = {Men} exact>
          <Men/>
        </Route>
        <Route path='/kids' component = {Kids} exact>
          <Kids/>
        </Route>
        <Route path='/signin' component = {Login} exact>
          <Login/>
        </Route>
        <Route path='/info' component = {Info} exact>
          <Info/>
        </Route>
        </switch>
      </Router>
      </>
  );
}

export default App;
