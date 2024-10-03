import React from 'react'
const Twistos = () => {
  return (
    <div id="bodyEjemplo">
        <div id="gridEjemplo">
            <img src="\imagenes\Alfajor Cofler Block.jpg" className="imagencofler"/>
            <div id='tituloProductoEspecifico'><h2>Alfajor Cofler Block</h2></div>
            <div id='divprecio'>
              <div id='precioProductoEspecifico'>$ 1.280</div>
              <div class="contenedor-imagen">
                <img alt="sucursal.banderaDescripcion"  src="./Imagenes/mercado.png"/>
             </div>
            </div>
            
            
            <div id='descripcionProductoEspecifico'>Un alfajor de la marca Cofler con un sabor inigualable al chocolate Block, de un buen tamaño para el disfrute de los mas chicos y adultos, no recomendable para gente diabetica</div>
        </div>
        <div id='divTabla'>
        <table class="tablaejempo">
    <thead>
      <tr>
        <th>#</th>
        <th>Comercio</th>
        <th>Precio</th>
        <th>Distancia</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th><div class="contenedor-imagen">
                              <img alt="sucursal.banderaDescripcion" ng-src="https://imagenes.preciosclaros.gob.ar/comercios/13-1.jpg" fallback-src="/img/comercio-no-image.png" src="https://imagenes.preciosclaros.gob.ar/comercios/13-1.jpg"/>
                            </div></th>
        <td id='hola'>Coperativa Obrera</td>
        <td>$ 7.600</td>
        <td>0.5 km</td>
      </tr>
    <tr>
      <th>
          <div class="contenedor-imagen">
                <img alt="sucursal.banderaDescripcion"  src="./Imagenes/mercado.png"/>
          </div>
      </th>
      <td>Mercado Libre</td>
      <td>$ 2'00</td>
      <td>12000 km</td>
    </tr>
    <tr>
      <th>3</th>
      <td colspan="2"> </td>
      <td></td>
    </tr>
  </tbody>
</table>
</div>
    </div>
  )
}
export default Twistos;