import React, { useEffect } from "react";

const Home = (props) => {
  

  return (
    <div id="bienvenidos">
      <h1 id="titulo">Bienvenidos</h1>
      <div id="texto">
        <p>
          Descubre los mejores precios de alimentos, de higiene y uso personal
          en Benitos Juarez. 
        </p>
        <a href="#" target="_blank" id="A">
          Explorar
        </a>
      </div>
      <div id="imagenes">
        <img src="./imagenes/carrito.jpg"  />
        <img src="./Imagenes/fotohome2.jpg"   />
      </div>
    </div>
  );
};
export default Home;

