//import React from 'react';
import Home from './paginas/home/home';
import './App.css';
import { useState } from 'react';


function App(){
  const [valor, setValor] = useState(0);
  function handleClick (){
    setValor(valor +1);
  }
  return(
        
    <div>
      
      <h1>App</h1>
      <p>O valor é: {valor}</p>
      <button onClick={handleClick}>Adicionar</button>

      <Home/>
    </div>
    
  );
}

export default App;