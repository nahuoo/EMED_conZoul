import React from "react"
import PageHeader from '../assets/css/StyleImagenHome'
import ScrollMarcas from './ScrollMarcas'
import { Link } from 'react-router-dom'



// core components

function ImagenHome() {
  
  return (
    
    <PageHeader> 
        <div className='contenedor'>                          
          <h1>Uno Electromedicina</h1>
                    
            <Link className='button' to="/contact" >                    
            Contáctenos
            </Link >          
        </div>
        <spare className='info' >
          <ul>
           <li>
            <button className='buttonNovedades' onClick={ ()=>document.getElementById("noticias").scrollIntoView({ block: 'start',  behavior: 'smooth' }) }>NOVEDADES<i class="far fa-arrow-alt-circle-down"></i></button>
            </li>
            <li>
            <i class="fas fa-phone"></i> <a href="tel:02234739018" target="_blank" rel="noopener noreferrer">
                (0223) 473-9018
                </a>
              </li>
            </ul> 
        </spare>
        <div className='descripcion'>
          <h3>Servicio técnico oficial - Mantenimientos preventivos - Alquiler / Comodato de equipos </h3>
          <h3>Reactivos - Descartables - Consumibles para todas las marcas</h3>
        </div>
      <ScrollMarcas />
    </PageHeader>   
    
  );
}

export default ImagenHome;
