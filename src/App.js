import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import AddProperties from './components/Properties/AddProperties';
import EnquireProperties from './components/Properties/EnquireProperties';
import './App.css'
import Nav from './components/Layout/Nav';

const App = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/addProperties" element={<AddProperties />} />
        <Route path="/enquireProperties" element={<EnquireProperties />} />
      </Routes>
    </Router>
  )
}

export default App
