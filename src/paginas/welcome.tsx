import './home/home.css'
import { useState } from 'react';
import Home from './home/home';

function Welcome(){
    const [loggedIn, setLoggedIn] = useState(false);


    return(
        <div>
           <h3>
        Clique no botão para entrar
      </h3>
            {loggedIn ? (
              <div>
                <h1>Bem-vindo de volta!</h1>
                <Home/>
              </div>
        
        
      ) : (
        <button onClick={() => setLoggedIn(true)}>Entrar</button>
      )}

      
        </div>
    )
}
export default Welcome; 