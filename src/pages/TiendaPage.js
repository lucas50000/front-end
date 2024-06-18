import React from 'react'


const TiendaPage = (props) => {
  return (
    <div>
      <head><style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style></head>


    <div id='divTienda'>
      <form class="form-inline my-2 my-lg-0 barrasearch">
      <input class="form-control mr-sm-2 " type="search" placeholder="Buscar" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
      </form>
        <ol id='gridTienda'>
        <li className='producto '>
              <a href='3' className='productolink'>
                <div className='productoContenedor'>
                  <img src="/imagenes/sata.jpg" className='productoImagen'></img>
                  <div className='productoTexto'>
                    <p className='productoDescripcion'>Sata ssd 240gb kingston</p>
                    <h2 className='productoPrecio'>$ 44.999</h2>
                  </div>
                </div>
              </a>
          </li>
          <li className='producto'>
              <a href='3' className='productolink'>
                <div className='productoContenedor'>
                  <img src="/imagenes/fideos.jpg" className='productoImagen'></img>
                  <div className='productoTexto'>
                    <p className='productoDescripcion' id="PD">Fideos Moños Matarazzo X 500 Gr</p>
                    <h2 className='productoPrecio' id="PP">$ 2.275</h2>
                  </div>
                </div>
              </a>
          </li>
          <li className='producto'>
              <a href='3' className='productolink'>
                <div className='productoContenedor'>
                  <img src="/imagenes/Alfajor Cofler Block.jpg" className='productoImagen'></img>
                  <div className='productoTexto'>
                    <p className='productoDescripcion'>Alfajor Cofler Block X 60 Gr</p>
                    <h2 className='productoPrecio'>$ 962</h2>
                  </div>
                </div>
              </a>
          </li>
          <li className='producto'>
              <a href='3' className='productolink'>
                <div className='productoContenedor'>
                  <img src="/imagenes/4090.jpg"className='productoImagen'></img>
                  <div className='productoTexto'>
                    <p className='productoDescripcion'>MSI B Video Card, GeForce RTX 4090 GAMING X TRIO 24G NVIDIA Video Cards</p>
                    <h2 className='productoPrecio'>$ 20</h2>
                  </div>
                </div>
              </a>
          </li>
          <li className='producto'>
              <a href='3' className='productolink'>
                <div className='productoContenedor'>
                  <img src="/imagenes/twistos.webp" className='productoImagen'></img>
                  <div className='productoTexto'>
                    <p className='productoDescripcion'>Twistos minitostaditas quesos 155 gr</p>
                    <h2 className='productoPrecio'>$ 3.743</h2>
                  </div>
                </div>
              </a>
          </li>
          <li className='producto'>
              <a href='3' className='productolink'>
                <div className='productoContenedor'>
                  <img src="/imagenes/pan.jpg" className='productoImagen'></img>
                  <div className='productoTexto'>
                    <p className='productoDescripcion'>Pan Bimbo Blanco Grande</p>
                    <h2 className='productoPrecio'>$ 1.850</h2>
                  </div>
                </div>
              </a>
          </li>
        </ol>
    </div>
    </div>
  );
}
export default TiendaPage;