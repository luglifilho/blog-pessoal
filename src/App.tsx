//import React from 'react';
import UserProvider from './contexts/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/home';
import Login from './paginas/login/login';


function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>

      </BrowserRouter>

    </UserProvider>
  );
}

export default App;
    


