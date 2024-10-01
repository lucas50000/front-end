import React from 'react'
const EjemploProductos = () => {
  return (
    <div id="bodyEjemplo">
        <div id="gridEjemplo">
            <img src="./imagenes/4090.jpg" className="imagenEjemplo"/>
            <div id='tituloProductoEspecifico'><h2>Grafica 4080 TI</h2></div>
            <div id='precioProductoEspecifico'>$ 20.000.000</div>
            <div id='descripcionProductoEspecifico'>Grafica genial para mejorar tu experiencias en juegos, con ella nunca veras bajos fps</div>
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
        <td>$ 2.600</td>
        <td>0.5 km</td>
      </tr>
    <tr>
      <th>2</th>
      <td>Mercado Libre</td>
      <td>$ 12</td>
      <td>12 km</td>
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
export default EjemploProductos;