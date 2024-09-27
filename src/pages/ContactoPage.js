import React, { useState, useEffect } from 'react';

const ContactoPage = (props)=>{
  useEffect(() => {
    document.querySelectorAll(".intro").forEach(inp => {
      inp.addEventListener("click", () => {
        inp.value = "";
      });
    });
  }, []);
  
  
  return(
    <div>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </head>
      <div id="fondo">
      </div>
      <div>
        <div id="si">
          <section id="divContacto">
            <h1 id="tituloContacto">Contáctenos</h1>
            <input defaultValue="Nombre" class="intro" id="botonNombre"></input>
            <input defaultValue="Tu correo electrónico" class="intro" id="botonCorreo"></input>
            <input defaultValue="Mensaje opcional" class="intro" id="botonMensaje"></input>
            <button id="botonContacto">Enviar</button>
          </section>
        </div>
      </div>
    </div>
  );
}
export default ContactoPage;
