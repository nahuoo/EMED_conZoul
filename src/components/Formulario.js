import React from 'react'
import StyledFormulario from '../assets/css/StyledFormulario'


/* El formulario */
const Formulario = () => {

 /* const nombre = React.useRef
  const email = React.useRef
  const mensaje = React.useRef
*/  return(
    <StyledFormulario>
    <form >
      <h2>Quieres escribirnos?</h2>
    {/* input del nombre */}    
      <input 
       /* ref={nombre} */
         placeholder='Nombre...'
        type='text'

      />
      {/* input del mail */}
      <input 
       /* ref={email} */
        placeholder='Email...'
        type='text'
        
      />
      {/* input del mensaje */}
      <input 
      /*  ref={mensaje} */
        placeholder='Escribe un mensaje...'
        cols='80'
        rows='4'
        type='textarea'
        
      />

      {/* el boton Submit*/}
    <button 
      onClick={''}

    > Enviar
    </button>
    </form>
    </StyledFormulario>
  )
}

export default Formulario