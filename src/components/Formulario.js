import React from 'react'
import StyledFormulario from '../assets/css/StyledFormulario'
import StyledModal from '../assets/css/StyledModal'


/* El formulario */
const Formulario = () => {

  /*state del Modal */
  const [visible, setVisible] = React.useState("none")
  
  //const [email, setEmail] = React.useState('')
  //const [error, setError] = React.useState('false')

  /* logica de validacion del mail 
const validacion = (e) => {
  setEmail(e.target[4].value)
  if (email.includes('@') && email.includes('.com')) {
    handleSubmit(e)
  } else {
    setError(true)
  }
  if (error === true) {
    alert('El email debe ser válido')
  }
  setError(false)
}
*/

 const handleSubmit = (event) => { 
  
  event.preventDefault()
  
  let Mensaje = `nombre=${event.target[0].value}&localidad=${event.target[1].value}&tipo=${event.target[2].value}&pacientes=${event.target[3].value}&email=${event.target[4].value}&mensaje=${event.target[5].value}`
  
  fetch('http://192.168.0.179:4000/email', {
   method: 'post',
   headers: {'Content-Type':'application/x-www-form-urlencoded'},
   body: Mensaje
  })
  .then(response => response.text())
  .then(data => console.log(data));
  
  }
  
  /*logica del modal*/
 

  return(
    <StyledFormulario>
     
    <form onSubmit={handleSubmit}>
      <h2 id='form' > Envianos tu consulta o pedido de cotización</h2>

    {/* input del nombre */}    
      <input 
       
        placeholder='Nombre...'
        type='text'
        required
      />
     {/* input del localidad */}    

     <input 

         placeholder='Localidad...'
        type='text'
        required
      />
       {/* input del tipo de lab */}    

       <h5 className='left'>Tipo de laboratorio: </h5>
       <select>
       <option value="Particular">Particular</option>
       <option value="Hospital">Hospital</option>
       <option value="Clinica">Clínica/Sanatorio</option>
       <option value="Veterinaria">Veterinaria</option>
       <option value="Investigacion">Investigación</option>
      </select>

      {/* input del pacientes */}    
      
     <input 
       required
       placeholder='Pacientes por dia...'
      type='number'
      min='0'
    />

      {/* input del mail */}
      <input 
       type='email'
        placeholder='Email...'
        name='email'
        required
        
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
      onClick={() => setVisible(!visible)}
      />
    </form>
    <StyledModal modal={visible}>
        
    <div className='modal'></div>
        <div className='rectangulo'>
        
            <h2>Envío realizado</h2>
            <p>Nos contactaremos con usted a la brevedad.</p>
            <button 
            type=''
            onClick={()=>setVisible(!visible)}
            >
            cerrar
            </button>

        
      </div>

     
    
  </StyledModal>
    </StyledFormulario>
  )
}

export default Formulario