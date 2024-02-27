
import './App.css';

import Navbar from './components/NavBar/NavBar';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/login';
import Cadastro from './paginas/cadastro/Cadastro';
import Home from './paginas/home/home';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './components/temas/listaTemas/listaTemas';
import FormularioTema from './components/temas/formularioTema/FormularioTema';
import DeletarTema from  './components/temas/deletarTema/DeletarTema';
import ListaPostagens from './components/postagens/ListaPostagens/ListaPostagens';
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem';
import DeletarPostagem from './components/postagens/DeletarPostagem/DeletarPostagem';
import Perfil from './paginas/perfil/Perfil';



function App() {
  return (
    <>
      <AuthProvider> 
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path='/temas' element={<ListaTemas/>} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
             <Route path='/postagens' element={<ListaPostagens />} />
             <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil/" element={<Perfil />} />
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;
