import styled from 'styled-components'
import fondo from '../img/mardel2.jpg'


const Contacto = styled.div `
    display:grid;
    grid-template-columns:  2fr;
    grid-template-rows: 2fr;
    grid-gap: 5px;
    background-image: url("${fondo}");
    width: 100vw;
    max-width: 100%;
    height: 120vh;  
    background-position: center;
    background-attachment: fixed; 
    background-repeat: no-repeat; 
    background-size: cover;
    padding:15px;
    top: 8vh;
    overflow:hidden;

    .informacion{
        margin-top: 10vh;
        background: grey;
        height: 50%;
        width: 50%;
    }
`

export default Contacto