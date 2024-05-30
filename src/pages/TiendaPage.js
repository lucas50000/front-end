import React from 'react'

const TiendaPage = (props) => {
  return (
    <div id='divTienda'>
        <ol id='gridTienda'>
          <li className='producto'>
            <div className="productoImagen">
              <img src='./imagenes/casa.png'></img>
              <p>20.000</p>
            </div>
          </li>
    
        </ol>
    </div>
  );
}
export default TiendaPage;