import React from 'react'

const TiendaPage = (props) => {
  return (
    <div id='divTienda'>
        <ol id='gridTienda'>
          <li className='producto'>
            <div className="productoImagen">
              <a href='3' className='productolink'>
              <div className='productoContenedor'>
              <img src='./imagenes/casa.png'></img>
              
              </div>
              </a>
            </div>
          </li>
          <li className='producto'>
            <div className="productoImagen">
              <a href='3' className='productolink'>
              <img src='./imagenes/casa.png'></img>
              <p>20.000</p>
              </a>
            </div>
          </li>
          <li className='producto'>
            <div className="productoImagen">
              <a href='3' className='productolink'>
              <img src='./imagenes/casa.png'></img>
              <p>20.000</p>
              </a>
            </div>
          </li>
          <li className='producto'>
            <div className="productoImagen">
              <a href='3' className='productolink'>
              <img src='./imagenes/casa.png'></img>
              <p>20.000</p>
              </a>
            </div>
          </li>
          <li className='producto'>
            <div className="productoImagen">
              <a href='3' className='productolink'>
              <img src='./imagenes/casa.png'></img>
              <p>20.000</p>
              </a>
            </div>
          </li>
          <li className='producto'>
            <div className="productoImagen">
              <a href='3' className='productolink'>
              <img src='./imagenes/casa.png'></img>
              <p>20.000</p>
              </a>
            </div>
          </li>
        </ol>
    </div>
  );
}
export default TiendaPage;