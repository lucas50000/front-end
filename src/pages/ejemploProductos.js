import React from 'react'
const EjemploProductos = () => {
  return (
    <div id="bodyEjemplo">
        <div id="gridEjemplo">
            <img src="./imagenes/4090.jpg" className="imagenEjemplo"/>
            <div>s</div>
          <div>a</div>
          <div>d</div>
        </div>
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
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>3</th>
      <td colspan="2"> </td>
      <td></td>
    </tr>
  </tbody>
</table>
    </div>
  )
}
export default EjemploProductos;