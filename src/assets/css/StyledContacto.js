import styled from 'styled-components'
import fondo from '../img/mardel2.jpg'


const Contacto = styled.div `
    display:flex;
    flex-direction:column;
    grid-gap: 5px;
    background-image: url("${fondo}");
    width: 1000vw;
    max-width: 100%;
    height: 200vh;  
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

    .contenedorMapa{
        margin:10vh;

    }
`

export default Contacto