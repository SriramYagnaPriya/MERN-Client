import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './component/navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Register from './component/Register';
import Home from './component/home';
const root =ReactDOM.createRoot(document.getElementById('root'))
//virtual Root( V DOM)
root.render(

  <div>
    <Router>
      <Navbar/>
      <Home/>
      <Routes>
      <Route path="/register" element = {<Register/>}/>
      <Route path="/login" element = {<h1>Login</h1>}/>
      <Route path="/logout" element = {<h1>Logout</h1>}/>
      </Routes></Router>
  </div>
 )