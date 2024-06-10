import React, { useEffect } from "react";

const Home = (props) => {
  useEffect(() => {
    let slideIndex = 0;
    showSlides(slideIndex);

    // Cambia la imagen cada 2 segundos
    setInterval(() => {
        plusSlides(1);
    }, 2000);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("carousel-item");
        if (n >= slides.length) { slideIndex = 0 }
        if (n < 0) { slideIndex = slides.length - 1 }
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }
        slides[slideIndex].classList.add("active");
    }
  }, []);

  return (
    <div id="bienvenidos">
      <h1 id="titulo">Bienvenidos</h1>
      <div id="texto">
        <p>
          Descubre los mejores precios de alimentos, de higiene y uso personal
          en Benitos Juarez.
        </p>
        <a href="https://imgs.search.brave.com/PFu7NsO6-DFxDoh0Yd9omscrdl2VYuIwKZ6c5yoSpR8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS4xODg0/MTUyMTc3Ljg1ODYv/YmcsZjhmOGY4LWZs/YXQsNzUweCwwNzUs/Zi1wYWQsNzUweDEw/MDAsZjhmOGY4Lmpw/Zw" target="_blank" id="A">
          Explorar
        </a>
      </div>
      <div>
        <div class="carousel">
          <div class="carousel-inner" id="imagenes">
            <div class="carousel-item">
              <img src="https://i.pinimg.com/236x/80/09/d6/8009d60d7c17a441b6275e7a8c4730b2.jpg" alt="Imagen 2"/>
            </div>
            <div class="carousel-item">
              <img src="https://i.pinimg.com/236x/2c/f6/52/2cf65218d6bb9bae69225688a67af7e8.jpg" alt="Imagen 3"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
