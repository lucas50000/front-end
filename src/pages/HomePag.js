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
        <a href="https://imgs.search.brave.com/BhdoNSyYyQP-Uc-lO0DFpc7PmwO6U1SqM_NPaJ2a0JA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM3Lm1lbWVkcm9p/ZC5jb20vaW1hZ2Vz/L1VQTE9BREVENTc1/LzY2MTE0MmY1NGNj/ODcuanBlZw" target="_blank" id="A">
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

