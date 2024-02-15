//import React from 'react';
import { useEffect, useState } from 'react';
import './home.css';

function Home(){

    const[completed, setCompleted] = useState(false);
    const[tarefa, setTarefa] = useState('');

    useEffect( () =>{
            if(completed) {
                setTarefa('Parabens voce conclui a tarefa!')
            }

    },[completed])
    return (
     <div>
        <h1>Tarefa</h1>
        <h3>{tarefa}</h3>
        <p>Clique para concluir a tarefa</p>
        <button onClick={()=>{setCompleted(true)}} >Concluir Tarefa</button>
        
     </div>
    );
}

export default Home;