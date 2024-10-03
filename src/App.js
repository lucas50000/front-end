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
import Grafica from './pages/productos/grafica.js';
import "./Styles/Components/Pages/Ejemplo.css";
import Nosotros from "./pages/NosotrosPage.js";
import "./Styles/Components/Pages/NosotrosPage.css";
import ReportarError from './pages/ReportesPage.js';
import "./Styles/Components/Pages/ReportesPage.css";
import Alfajorcofler from "./pages/productos/alfajorcofler";
import Twistos from "./pages/productos/Twistos.js";
import Fideos from "./pages/productos/fideosmoñomatarazzo.js";
import ScrollToTop from "./pages/scrool.js";
import Disco from "./pages/productos/disco.js";
import Pan from "./pages/productos/pan.js";
function App(cont) {
  return (
    <div className="App">
      <head><title>hola</title></head>
      <BrowserRouter>
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Novedades' element={<New/>}/>
          <Route path='/Contacto' element={<ContactoPage/>}/>
          <Route path='/Tienda' element={<TiendaPage/>}/>
          <Route path='/Usuario/Favorito' element={<Fav/>}/>
          <Route path='/grafica' element={<Grafica/>}/>
          <Route path='/Nosotros' element={<Nosotros/>}/>
          <Route path='/ReportarError' element={<ReportarError/>}/>
          <Route path='/alfajor' element={<Alfajorcofler/>}/>
          <Route path='/Twistos' element={<Twistos/>}/>
          <Route path='/Fideos' element={<Fideos/>}/>
          <Route path='/disco' element={<Disco/>}/>
          <Route path='/pan' element={<Pan/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
