//import React from 'react';
//import { useNavigate, Link } from 'react-router-dom';
import './home.css';
import homeLogo from '../../assets/home.png'

function Home() {
    
    return (
        <>
        <div className="bg-sky-600 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3 rounded-full' />
      
            </div>
          </div>
        </div>
      
      </>
      
    )
}

export default Home