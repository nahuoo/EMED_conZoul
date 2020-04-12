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
          <h2>Servicio técnico y venta de equipamiento e insumos de laboratorio.</h2>            
            <Link className='button' to="/contact" >                    
            Contáctenos
            </Link >          
        </div>
      <span> 
          <img  src={require('../assets/img/logouno.png')} alt='logo'/> 
        </span>
        <div className='descripcion'>
          <h3>Servicio técnico oficial - Mantenimientos preventivos - Alquiler / Comodato de equipos </h3>
          <h3>Reactivos - Descartables - Consumibles para todas las marcas</h3>
        </div>
      <ScrollMarcas />
    </PageHeader>   
    
  );
}

export default ImagenHome;
