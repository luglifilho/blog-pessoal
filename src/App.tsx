//import React from 'react';
import './App.css'
import Home from './paginas/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/login';



function App(){

  
    return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </> 
  
  )}


  export default App;
        
   
    


