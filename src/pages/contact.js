import React from 'react'
import Mapa from '../components/Mapa'
import Formulario from '../components/Formulario'
import Contacto from '../assets/css/StyledContacto'

const Contact = () => {

  return (
    <Contacto>
      <Formulario />
      <div className='informacion'>
        <h3>Teléfono</h3>
        <h3>Dirección</h3>
        <h3>WhatsApp
        <h3>hola</h3>
        </h3>
      </div>
    
      <div className='contenedorMapa'>
        <Mapa />
      </div>
    </Contacto>
  )
}

export default Contact