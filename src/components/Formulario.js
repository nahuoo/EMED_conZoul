import React from 'react'

/* El formulario */
const Formulario = () => {
  
const handleSubmit = (e) => e.preventDefault()

  const nombre = React.useRef
  const email = React.useRef
  const mensaje = React.useRef

  return(
    <form onSubmit = {handleSubmit}>
      <h2>Quieres escribirnos?</h2>
    {/* input del nombre */}    
      <input 
        ref={nombre}
        placeholder='Nombre...'
        type='text'

      />
      {/* input del mail */}
      <input 
        ref={email}
        placeholder='Email...'
        type='text'
        
      />
      {/* input del mensaje */}
      <input 
        ref={mensaje}
        placeholder='Escribe un mensaje...'
        cols='80'
        rows='4'
        type='textarea'
        
      />

      {/* el boton Submit*/}
    <button 
      type='submit'
      block
      onClick={''}

    />
    </form>
  )
}

export default Formulario