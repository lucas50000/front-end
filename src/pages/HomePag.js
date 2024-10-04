import React from "react";
import { Link } from "react-router-dom";
const Home = (props) => {
  

  return (
    <div id="bienvenidos">
      <h1 id="titulo">Bienvenidos</h1>
      <div id="texto">
        <p>
          
          Descubre los mejores precios de alimentos, de higiene y uso personal
          en Benitos Juarez. <br/>Comparte las mejores ofertas que encuentres para cooperar con nuestra comunidad.
        </p>
        <Link to="/Tienda" className="no-underline">
          <button target="_blank" id="botoninicio">
          Explorar
          </button>
        </Link>
      </div>

    
      <div id="imagenes">
        <img src="./imagenes/carrito.jpg" alt="" />
        <img src="./Imagenes/fotohome2.jpg" alt=""  />
      </div>
    </div>
  );
};
export default Home;

