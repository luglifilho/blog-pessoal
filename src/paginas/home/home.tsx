//import React from 'react';
import { useEffect, useState } from 'react';
import './home.css';
//import '../../output.css'



function Home(){

    const[completed, setCompleted] = useState(0);
    const[tarefa, setTarefa] = useState('');

    function handleClickMais(){
        setCompleted(completed + 1)
    }
    function handleClickMenos(){
        setCompleted(completed - 1)
    }

    useEffect( () =>{
            if(completed > 4) {
                setTarefa('Parabens voce conclui a tarefa!')
            }

    },[completed])
    return (
     
     <div>
        <h2>Tarefa</h2>
        <h3>{tarefa}</h3>
        <p>Você precisa chegar em 5 para concluir a Tarefa</p>
        <p> O valor atual é : {completed}</p>
        <div className=''>
        <button onClick={handleClickMais} className=' mx-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>+ 1</button>
        <button onClick={handleClickMenos} className='mx-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>- 1</button>
        
        </div>
        <br />
        <br />
        <button onClick={() => setCompleted(0)} className='btn'>Zerar</button>
     </div>
    );
}

export default Home;  
