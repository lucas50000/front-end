import React, { useState, useEffect } from 'react';

const Footer = (props)=>{
    return(
        <footer id='dvfooter'>
            
            <div id='footer'> 
                <div id='fl'>
                    <div className='boxf'>  
                    <p>Por Bruno Valenzuela, Juan Marcos Chalu , Luca Aladro y Lucas Ferreyra </p>
                    <p>Copyright ©; Creado por: EEST Nº1</p>
                    </div>
                    <div className='boxf' id='center'>
                        <p><b>Ubicacion:</b>
                            <br></br>
                           Buenos Aires, Benito Juarez
                            <br></br>
                           <b>Contacto:</b> 
                            <br></br>
                           +54 9 2281 3242342
                        </p>

                    </div>
                    <div className='boxf'>
                       <p>¡Gracias por visitarnos!
                        <br></br>
                         Su presencia en nuestra página 
                         <br></br>
                         significa mucho para nosotros.</p>
                         <p><b>juan es un peruano</b></p>
                    </div>
                 
                </div>
           
            </div>

        </footer>
    )
}

export default Footer;