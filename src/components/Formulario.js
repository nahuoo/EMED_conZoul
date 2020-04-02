import React from 'react'
import StyledFormulario from '../assets/css/StyledFormulario'

/* El formulario */
const Formulario = () => {

 // Falta Logica de comprobacion de campos
 const handleSubmit = (event) => { 
  event.preventDefault()

  let Mensaje = `name=${event.target[0].value}&email=${event.target[1].value}&message=${event.target[2].value}` 

  fetch('http://192.168.0.2:4000/email', {
   method: 'post',
   headers: {'Content-Type':'application/x-www-form-urlencoded'},
   body: Mensaje
  })
  .then(response => response.text())
  .then(data => console.log(data));
  }

  return(
    <StyledFormulario>
    <form onSubmit={handleSubmit}>
      <h2 id='form'>Quieres escribirnos?</h2>
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
      <textarea 
      /*  ref={mensaje} */
        placeholder='Escribe un mensaje...'
        cols='80'
        rows='4'
        type='textarea'
        className='texto'
        
      />

      {/* el boton Submit*/}
    <input className='submit' type='submit' value='Enviar'/>
    </form>
    </StyledFormulario>
  )
}

export default Formulario