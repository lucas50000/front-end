import React from "react";

const ReportarError = (props) => {
  return (
    <div id="fondoReporte">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </head>
      <div id="FondoReporte">
        <h1 id="tituloReporte">Reportar Errores</h1>
        <div id="area-form">
          <label>Reportar Errores</label>
          <div className="">
            <input className="inputsReporte" placeholder="Tu Email..."></input>
            <input className="inputsReporte2" placeholder="Explicame el error..."></input>
            <br></br>
            <button defaultValue="Tu Email" className="botonReporte">Enviar</button>
          </div>

        </div>
      </div>
    </div>
  );
};
export default ReportarError;
