import react from "react";

const Home = (props)=>{
    return(
    <div id="bienvenidos">
        <h1 id="titulo">Bienvenidos</h1>
        <div id="texto">
        <p>Descubre los mejores precios de alimentos, de higiene y uso personal en Benitos Juarez.</p>
        <button id="boton">Explorar </button>

        </div>
        <div id="imagenes">
            <img src="./Imagenes/fav.jpg" alt=""/>
            <img src="./Imagenes/frutas.jpg" alt=""/>
        </div>
    </div>
    );
}
export default Home;