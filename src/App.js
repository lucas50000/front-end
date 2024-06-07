import logo from './logo.svg';
import "./Styles/bootstrap.css";
import './App.css';
import Nav from './Components/Layouts/Nav';
import "./Styles/Components/Layouts/Nav.css";
import Home from './pages/HomePag';
import "./Styles/Components/Pages/HomePage.css";
import ContactoPage from './pages/ContactoPage';
import './Styles/Components/Pages/ContactoPage.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import New from './pages/NovedadesPage';
import './Styles/Components/Pages/NovedadesPage.css';
import TiendaPage from './pages/TiendaPage';
import './Styles/Components/Pages/TiendaPag.css';
import Footer from './Components/Layouts/Footer';
import "./Styles/Components/Layouts/Footer.css";
import './Styles/Components/Pages/FavoritoPage.css';
import Fav from './pages/FavoritoPage';
alert('Peru')

function App(cont) {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Novedades' element={<New/>}/>
          <Route path='/Contacto' element={<ContactoPage/>}/>
          <Route path='/Tienda' element={<TiendaPage/>}/>
          <Route path='/Usuario/Favorito' element={<Fav/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
