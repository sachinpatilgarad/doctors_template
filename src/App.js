import React from 'react';
import './App.css';
import Navigation from './Component/Navigation';
import Home from './Component/Home';
import About from './Component/About';
import Department from './Component/Department';
import Pages from './Component/Pages';
import Shop from './Component/Shop';
import Contact from './Component/Contact';
// import Hero from './Component/Hero';
// import Service from './Component/Service';
// import Staff from './Component/Staff';
// import Blog from './Component/Blog';
// import Doctors from './Component/Doctors';
// import Department1 from './Component/Department1';
// import Appointment from './Component/Appointment';
// import Footer from './Component/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Department' element={<Department/>} />
          <Route path='/Pages' element={<Pages/>} />
          <Route path='/Shop' element={<Shop/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
