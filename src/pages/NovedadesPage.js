import React, { useEffect } from "react";

const New = () => {
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, options);

        const elements = document.querySelectorAll('.animated-left, .animated-right');
        elements.forEach(element => {
            observer.observe(element);
        });

        // Cleanup observer on component unmount
        return () => {
            elements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div>
            <div id="Superior">
                <h1 className="animated-left">Novedades</h1>
                <h3 className="animated-right">Aca podes ver todo lo nuevo añadido y los dominios desde los que se obtiene la informacion</h3>
            </div>
            <div id="Content1">
                <img src="https://fastly.jsdelivr.net/gh/persano/BannersWebMaximus/stickers/Logo%20maximus%202.0.svg" id="maximus" className="animated-right" />
                <div className="left animated-left">
                    <h1>Maximus Gaming: Una Fuente Clave para Obtener Precios Competitivos</h1>
                    <p>Elegir Maximus Gaming como tu dominio principal para obtener precios tiene múltiples beneficios. La precisión de su información, su amplia cobertura de tiendas y productos, y sus herramientas avanzadas de búsqueda y análisis, hacen de esta plataforma una herramienta indispensable para cualquier comprador astuto. Ya sea que estés buscando el último hardware de gaming, componentes de PC, o cualquier otro producto tecnológico, Maximus Gaming te ayuda a encontrar las mejores ofertas disponibles en el mercado.<br /><br />

                    En resumen, Maximus Gaming no solo facilita la comparación de precios, sino que también empodera a los consumidores con información detallada y actualizada, asegurando que cada compra sea una compra inteligente.</p>
                </div>
            </div>
            <div id="Content2">
                <div className="right animated-right">
                    <h1>Compra Gamer: Una Fuente Clave para Obtener Precios Competitivos</h1>
                    <p>Elegir Compra Gamer como tu dominio principal para obtener precios tiene múltiples beneficios. La precisión de su información, su amplia cobertura de tiendas y productos, y sus herramientas avanzadas de búsqueda y análisis, hacen de esta plataforma una herramienta indispensable para cualquier comprador astuto. Ya sea que estés buscando el último hardware de gaming, componentes de PC, o cualquier otro producto tecnológico, Compra Gamer te ayuda a encontrar las mejores ofertas disponibles en el mercado.<br /><br />

                    En resumen, Compra Gamer no solo facilita la comparación de precios, sino que también empodera a los consumidores con información detallada y actualizada, asegurando que cada compra sea una compra inteligente.</p>
                </div>
                <img src="https://imagenes.compragamer.com/assets/logos/logo-fix.png" id="CGamer" className="animated-left" />
            </div>
            <div id="Content3">
                <img src="https://imgs.search.brave.com/2qBf27GWeormwjakq-OCM1LjfhnLLaFqPzJAR3c142A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9tZXJjYWRvbGli/cmUuc3Zn.svg" id="MLibre" className="animated-right" />
                <div className="left animated-left">
                    <h1>Mercado Libre: Una Fuente Clave para Obtener Precios Competitivos</h1>
                    <p>Elegir Mercado Libre como tu dominio principal para obtener precios tiene múltiples beneficios. La precisión de su información, su amplia cobertura de vendedores y productos, y sus herramientas avanzadas de búsqueda y análisis, hacen de esta plataforma una herramienta indispensable para cualquier comprador astuto. Ya sea que estés buscando el último gadget tecnológico, componentes de PC, ropa de moda, o cualquier otro producto, Mercado Libre te ayuda a encontrar las mejores ofertas disponibles en el mercado.<br /><br />

                    En resumen, Mercado Libre no solo facilita la comparación de precios, sino que también empodera a los consumidores con información detallada y actualizada, asegurando que cada compra sea una compra inteligente.</p>
                </div>
            </div>
            <div id="Content4">
                <div className="right animated-right">
                    <h1> Día: Tu Elección para una Vida Mejor</h1>
                    <p>Comprar en Día es una decisión que va más allá de llenar tu despensa. Es elegir frescura, calidad y apoyar lo local. Con precios competitivos y conveniencia en cada esquina, Día te ofrece una experiencia de compra que se adapta a tus necesidades. Además, su compromiso con la comunidad y el cliente garantiza que cada visita sea una experiencia satisfactoria. En Día, no solo compras, también contribuyes al bienestar de todos. 
                       Nuestra amplia seleccion de productos de la mas alta calidad les ofrece un margen confiable a la hora de comprar alimentos, muebles, tecnologia, etc. 

                    </p>
                </div>
                <img src="https://diaio.vtexassets.com/assets/vtex.file-manager-graphql/images/2ed8a7a3-95d4-4db2-897c-1370d972f8cd___35f8793fd5e07272ffdf01407f8cc7b5.svg" id="dia" className="animated-left" />
            </div>
            <div id="Content5">
                <img src="https://imgs.search.brave.com/s8c0ZkKGNGVDpUoyLkfEH31aFav1Qihpexqh6E2tCEQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L1dhbG1hcnQtTG9n/by01MDB4MjgxLnBu/Zw" id="walmart" className="animated-right" />
                <div className="left animated-left">
                    <h1>¡Descubre un Mundo de Opciones en Walmart!</h1>
                    <p>

En Walmart, no solo te ofrecemos una amplia gama de productos, sino también una experiencia de compra inigualable. Nuestras instalaciones están diseñadas para brindarte comodidad y conveniencia en cada visita, con amplios pasillos, áreas de descanso y servicios adicionales como farmacia y óptica. Además, nuestro compromiso con precios bajos todos los días garantiza que puedas encontrar todo lo que necesitas a precios que se ajustan a tu presupuesto. Ya sea que estés buscando abastecer tu despensa, renovar tu guardarropa o equipar tu hogar con lo último en tecnología, en Walmart encontrarás todo lo que necesitas y más. ¡Ven y descubre por qué millones de personas eligen Walmart para sus compras!<br /><br />

                   </p>
                </div>
            </div>
        </div>
    );
}

export default New;
