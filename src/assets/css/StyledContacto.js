import styled from 'styled-components'
import fondo from '../img/mardel2.jpg'


const Contacto = styled.div `
    display:grid;
    grid-column: repeat(2, 1fr);
    grid-gap: 5px;
    background-image: url("${fondo}");
    width: 100vw;
    max-width: 100%;
    height: 200vh;  
    background-position: center;
    background-attachment: fixed; 
    background-repeat: no-repeat; 
    background-size: cover;
    padding:10px;
    top: 8vh;
    overflow:hidden;

    
    .contenedorMapa{
        margin:10vh;
    }

    .contenedorFormulario{
      
        
    }

  .informacion{
    position: relative;
    display: flex;
    display: table-column;
    background: rgba(255, 255, 255, 0.5);
    margin-top: 5vh;
    margin-left: 5%;
    
    justify-content: space-evenly;
    align-items: center;
    padding: 6vh 0;
    color: #000;
  }

    ul {
        height: 18vh;
    }
    
    ul li{
        padding: 0 0 0.5rem;
        margin:0 0 0.5rem;
        font-weight: bold;
        font-size: 9.5px;
        font-family: 'Merriweather Sans', sans-serif;
        letter-spacing:0;
        
    }
    ul li a {
        color: inherit;
        text-decoration: none;
        
    }
    ul li a:hover {
        color: #16A1B2;
    }
    .copyright {
        font-size: 8px;
        position: absolute;
        bottom: 20%;
    }
    .icon {
        display: none;
    }
    .direction {
        line-height: 1.5; 
    }

    @media (min-width: 650px) {
        padding: 10vh;

        ul{
        padding: 5px
        }
        ul li{
        font-size: 10px;
        letter-spacing: 1pt;
        }
        .copyright{
        font-size: 9px;
        bottom: 5px;
        letter-spacing: 0.5pt;
        }
        .icon{
        display: initial;
        }
    }

    @media (min-width: 1000px) {
        padding: 5vh;

        ul li{
        font-size: 15px;
        letter-spacing: 1.5pt;
        margin-bottom: 1em;
        }
        .copyright {
        font-size: 12px;
        bottom: 5%;
        letter-spacing: 1.5pt;
        }
    }

`

export default Contacto