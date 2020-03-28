import React from 'react'
import ImagenHome from '../components/ImagenHome'
import Carrousel from '../components/Carrousel'

import Formulario from '../components/Formulario'

/* El modal de formulario 
const EnvioExitoso = () => {  
    return ReactDOM.createPortal((
        <div>
            <h5>Enviado!</h5>
            <p>Nos contactaremos con usted a la brevedad.</p>
            <div>
                <button
                   className="btn-neutral "
                   color="link"
                   type="button"
                   onClick={() => setVisible(false)}
                 >
                    Cerrar
                </button>
            </div>
        </div>
  
    ),document.getElementById('modal-root'))
  }

/*  El Home */
const Home = () => {
 /* const [visible, setVisible] = React.useState(false) */
  return (
    <div>
      <ImagenHome />
       
  { //   <Texto />
  }
      <Carrousel />  
 
    </div>
  )
}


export default Home