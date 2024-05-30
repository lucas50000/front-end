import logo from './logo.svg';
import './App.css';
import Nav from './Components/Layouts/Nav';
import "./Styles/Components/Layouts/Nav.css";
import Home from './pages/HomePag';
import "./Styles/Components/Pages/HomePage.css";
import ContactoPage from './pages/ContactoPage';
import './Styles/Components/Pages/ContactoPage.css';
export let pag = 0;
let PaginaActual=ContactoPage;


function Cpag(){
  switch(pag){
    case 0:
      PaginaActual = ContactoPage;
    break
    case 1:
      PaginaActual = Home;
    break
    default:
      
    break
  }
}


function App(cont) {
  return (
    <div className="App">
      <Nav />
      <PaginaActual />
      <PaginaActual />
      <PaginaActual />
    </div>
  );
}

export default App;
