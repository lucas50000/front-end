import React from 'react'
const Disco = () => {
  return (
    <div id="bodyEjemplo">
    <form class="form-inline my-2 my-lg-0 barrasearch">
  <input class="form-control mr-sm-2 " type="search" placeholder="Buscar" aria-label="Search"/>
  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
  </form>
    <div class="product-container">
        <div class="product-image">
        <img src=".\imagenes/sata.jpg" className="imagenEjemplo" alt='producto'/>
        </div>
        <div class="product-details">
            <h1 class="product-title">Sata ssd 240gb kingston </h1>
            <p class="product-price">$ 44.999</p>
            <button class="buy-button">Añadir a Favoritos</button>
            <div class="valoracion">
                <input id="radio1" type="radio" name="estrellas" value="5"/>
                <label for="radio1">★</label>
                <input id="radio2" type="radio" name="estrellas" value="4"/>
                <label for="radio2">★</label>
                <input id="radio3" type="radio" name="estrellas" value="3"/>
                <label for="radio3">★</label>
                <input id="radio4" type="radio" name="estrellas" value="2"/>
                <label for="radio4">★</label>
                <input id="radio5" type="radio" name="estrellas" value="1"/>
                <label for="radio5">★</label>
            </div>
        </div>
    </div>
  
    <table class="comparison-table">
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
                <td>1</td>
                <td>Supermercado A</td>
                <td>$1,280</td>
                <td>1.2 km</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Supermercado B</td>
                <td>$1,300</td>
                <td>2.5 km</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Supermercado C</td>
                <td>$1,290</td>
                <td>3.1 km</td>
            </tr>
        </tbody>
    </table>
</div>
)
}
export default Disco;