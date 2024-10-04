import React from "react";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <div id="bienvenidos">
      <h1 id="titulo">BIENVENIDOS</h1>
      <div id="texto">
        <p>
          En esta página, podrás comparar los precios de una amplia variedad de
          productos de diferentes categorías, desde tecnología y moda hasta
          artículos para el hogar y más.
          <br /> Nuestro objetivo es ofrecerte una experiencia fácil y
          agradable, Aquí TÚ TIENES EL CONTROL. Esperamos que disfrutes y que
          encuentres exactamente lo que buscas.
        </p>
        <Link to="/Tienda" className="no-underline">
          <button target="_blank" id="botoninicio">
            Explorar
          </button>
        </Link>
      </div>
      <div id="imagenes">
        <img src="./imagenes/carrito.jpg" alt="producto" />
        <img src="./Imagenes/fotohome2.jpg" alt="productos" />
      </div>
    </div>
  );
};
export default Home;
