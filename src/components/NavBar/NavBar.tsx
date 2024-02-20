import { Link } from "react-router-dom"
import  './Navbar.css'

function Navbar() {
 
  

    return (
      <>
      
       <div className='w-full bg-sky-600 text-white flex justify-center py-4 navbar'>
       <div className="imgR"> </div>
         <div className="container flex justify-between text-lg navbar">
           <div className='text-2xl font-bold uppercase'>Blog Pessoal</div>
              <div className='flex gap-4'>
                <Link to='/login' className="hover:underline">Login</Link>
                <Link to='/home' className="hover:underline"> Home</Link>
                <div className='hover:underline'>Postagens</div>
                <div className='hover:underline'>Temas</div>
                <div className='hover:underline'>Cadastrar tema</div>
                <div className='hover:underline'>Perfil</div>
                <div className='hover:underline'>Sair</div>
              </div>
            </div>
          </div>
      </>
    )
  }
  
  export default Navbar