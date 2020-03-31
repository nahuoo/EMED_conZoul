import styled from 'styled-components'
import fondo from '../img/mardel.jpg'


const Contacto = styled.div `
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr;
    grid-gap: 5px;
    background-image: url("${fondo}");
    width: 100%;
    max-width: 100%;
    height: 120vh;  
    background-position: center;
    background-attachment: fixed; 
    background-repeat: no-repeat; 
    background-size: cover;
    padding:15px;

      
`

export default Contacto