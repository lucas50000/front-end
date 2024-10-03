import React, {  useEffect } from "react";
// import { pag } from "../../App";
// import Home from "../../pages/HomePag";
import { Link } from "react-router-dom";

const Nav = (props) => {
  useEffect(() => {
    let menu = document.getElementById("menuh");
    const menuLink = document.getElementById("menuLink");
    let rotated = false;

    const handleClick = (event) => {
      event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        setTimeout(() => {
          menu.style.display = "none";
        }, 300); // Espera el tiempo de la transición antes de ocultar
      } else {
        menu.style.display = "block";
        setTimeout(() => {
          menu.classList.add("show");
        }, 10); // Pequeña demora para permitir el display block antes de la transición
      }
      if (!rotated) {
        menuLink.classList.add("rotate360");
        setTimeout(() => {
          menuLink.classList.remove("rotate360");
          menuLink.classList.add("rotate90");
        }, 400);
      } else {
        menuLink.classList.add("rotate360");
        setTimeout(() => {
          menuLink.classList.remove("rotate360");
          menuLink.classList.remove("rotate90");
        }, 400);
      }
      rotated = !rotated;
    };

    document.querySelector(".menu-link").addEventListener("click", handleClick);

    return () => {
      document
        .querySelector(".menu-link")
        .removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <nav id="nav">
      <Link to="/" className="no-underline">
        <div id="empresa">
          <img src="./imagenes/icono.png" alt="LOGO" id="ins"></img>
          <h1 id="nombre">Juarez Busca</h1>
        </div>
        </Link>
        <div id="divdiv">
          <ul id="listaNav">
            <li>
              <Link to="/" className="no-underline">
                <button>
                  <img src="./imagenes/casa.png" class="INav" alt="a" />
                  <span class="text">Inicio</span>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Tienda" className="no-underline">
                <button>
                  <img src="./imagenes/tienda.png" class="INav" alt="b"/>
                  <span class="text">Tienda</span>
                </button>
              </Link>
            </li>
            
            {/* <li>
              <Link to="/Nosotros" className="no-underline">
                <button>
                  <img src="./imagenes/tienda.png" class="INav" />
                  <span class="text">nosotros</span>
                </button>
              </Link>
            </li> */}
            <li>
              <Link to="/Novedades" className="no-underline">
                <button>
                  <img src="./imagenes/novedades.png" class="INav" alt="c"/>
                  <span class="text">Novedades</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <a class="menu-link" id="menuLink" href="/">
          <img src="./imagenes/menu.png" alt="Menu Hamburgesa" class="menu" />
        </a>
      </nav>
      <div id="menuh">
        <ul>
          <p>Navegacion</p>
          <li>
            <Link to="/Contacto" className="no-underline">
              <button>
                <img src="./imagenes/nosotros.png" class="burger" alt="k"/>
                <span>Contactanos</span>
              </button>
            </Link>
          </li>
         
          <p>Pagina</p>
          <li>
          <Link to="/ReportarError" className="no-underline">
            <button>
              <img src="./imagenes/reportar.png" class="burger" alt="no"/>
              <span>Reportar Error</span>
            </button>
            </Link>
          </li>
          <li>
            <button>
              <img src="./imagenes/Conf.png" class="burger" alt="b"/>
              <span>Configuracion</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
