import logo from './logo.svg';
import './App.css';
import Nav from './Components/Layouts/Nav';
import "./Styles/Components/Layouts/Nav.css";
import Home from './pages/HomePag';
import "./Styles/Components/Pages/HomePage.css";
import ContactoPage from './pages/ContactoPage';
import './Styles/Components/Pages/ContactoPage.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import New from './pages/NosotrosPage';

function App(cont) {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Novedades' element={<New/>}/>
          <Route path='/Contacto' element={<ContactoPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
