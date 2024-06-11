import React, { useState, useEffect } from "react";
import { pag } from "../../App";
import Home from "../../pages/HomePag";
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
        <div id="empresa">
          <img src="./imagenes/icono.png" alt="LOGO" id="ins"></img>
          <h1 id="nombre">Store Book</h1>
        </div>
        <div id="divdiv">
          <ul id="listaNav">
            <li>
              <Link to="/" className="no-underline">
                <button>
                  <img src="./imagenes/casa.png" class="INav" />
                  <span class="text">Inicio</span>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Tienda" className="no-underline">
                <button>
                  <img src="./imagenes/tienda.png" class="INav" />
                  <span class="text">Tienda</span>
                </button>
              </Link>
            </li>
            
            <li>
              <Link to="/Nosotros" className="no-underline">
                <button>
                  <img src="./imagenes/tienda.png" class="INav" />
                  <span class="text">nosotros</span>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Novedades" className="no-underline">
                <button>
                  <img src="./imagenes/novedades.png" class="INav" />
                  <span class="text">Novedades</span>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/producto" className="no-underline">
                <button>
                  <img src="./logo512.png" class="INav" />
                  <span class="text">ejemplo</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <a class="menu-link" id="menuLink">
          <img src="./imagenes/menu.png" alt="Menu Hamburgesa" class="menu" />
        </a>
      </nav>
      <div id="menuh">
        <ul>
          <p>Navegacion</p>
          <li>
            <Link to="/Contacto" className="no-underline">
              <button>
                <img src="./imagenes/nosotros.png" class="burger" />
                <span>Contactanos</span>
              </button>
            </Link>
          </li>
          <p>Usuario</p>
          <li>
            <button>
              <img src="./imagenes/usuario.png" class="burger" />
              <span>Cuenta</span>
            </button>
          </li>
          <li>
            <button>
              <img src="./imagenes/fav.png" class="burger" />
              <span>Favoritos</span>
            </button>
          </li>
          <li>
            <button>
              <img src=".\imagenes\Conf-usu.png" class="burger" />
              <span>Configurar Cuenta</span>
            </button>
          </li>
          <p>Pagina</p>
          <li>
            <button>
              <img src="./imagenes/reportar.png" class="burger" />
              <span>Reportar Error</span>
            </button>
          </li>
          <li>
            <button>
              <img src="./imagenes/Conf.png" class="burger" />
              <span>Configuracion</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
