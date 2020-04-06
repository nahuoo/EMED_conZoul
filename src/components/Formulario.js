import React from 'react'
import StyledFormulario from '../assets/css/StyledFormulario'
import StyledModal from '../assets/css/StyledModal'

/* El formulario */
const Formulario = () => {

  /*state del Modal */
  const [visible, setVisible] = React.useState(false)


 // Falta Logica de comprobacion de campos
 const handleSubmit = (event) => { 
  event.preventDefault()

  let Mensaje = `nombre=${event.target[0].value}&localidad=${event.target[1].value}&tipo=${event.target[2].value}&pacientes=${event.target[3].value}&email=${event.target[4].value}&mensaje=${event.target[5].value}`

  fetch('http://192.168.0.2:4000/email', {
   method: 'post',
   headers: {'Content-Type':'application/x-www-form-urlencoded'},
   body: Mensaje
  })
  .then(response => response.text())
  .then(data => console.log(data));
  }
  
  /*logica del modal*/
  const handleClick = () => {
    setVisible(!visible)
  }

  if (visible === true) {
    return(
      <StyledModal>
          <div className='rectangulo'>
              <h2>Envío realizado</h2>
              <p>Nos contactaremos con usted a la brevedad.</p>
              <button 
              type=''
              onClick={handleClick}
              >
              cerrar
              </button>

          </div>
      </StyledModal>
  )
  }
  
  return(
    <StyledFormulario>
    <form onSubmit={handleSubmit}>
      <h2 id='form' >Quieres escribirnos?</h2>

    {/* input del nombre */}    
      <input 
       
         placeholder='Nombre...'
        type='text'

      />
     {/* input del localidad */}    

     <input 
       
         placeholder='Localidad...'
        type='text'

      />
       {/* input del tipo de lab */}    

       Tipo de laboratorio:
       <select>
       <option value="Particular">Particular</option>
       <option value="Hospital">Hospital</option>
       <option value="Clinica">Clínica/Sanatorio</option>
       <option value="Veterinaria">Veterinaria</option>
       <option value="Investigacion">Investigación</option>
      </select>

      {/* input del pacientes */}    
      
     <input 
       
       placeholder='Pacientes por dia...'
      type='number'

    />

      {/* input del mail */}
      <input 
       
        placeholder='Email...'
        type='email'
        
      />
      {/* input del mensaje */}
      
      <textarea 
      
        placeholder='Escribe un mensaje...'
        cols='80'
        rows='4'
        type='textarea'
        className='texto'
        
      />

      {/* el boton Submit*/}
    <input 
      className='submit' 
      type='submit' 
      value='Enviar'
      onClick={handleClick}
      />
    </form>
    </StyledFormulario>
  )
}

export default Formulario