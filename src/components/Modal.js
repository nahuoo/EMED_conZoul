import React from 'react'
import StyledModal from '../assets/css/StyledModal'

const Modal = () => {

const handleClick = (e) => {
    e.preventDefault()
}
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
)}



export default Modal