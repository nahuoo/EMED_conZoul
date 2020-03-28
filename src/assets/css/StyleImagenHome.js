import styled from 'styled-components';
import fotoTaller from '../img/taller.jpg';
  

const PageHeader = styled.div `

  display: flex;  
  margin: 0; 
  padding: 0px;
  position: relative;
  background-image: url("${fotoTaller}");
  width: 100%;
  max-width: 100%;
  height: 120vh; 
  background-position:center; 
  background-attachment: fixed; 
  background-repeat: no-repeat; 
  background-size: cover;
  overflow:hidden;


    .filtro{
        background: #16A1B2;
        background-size:cover;
        height:100%;
        margin:0;
        opacity: 25%;
        background-attachment: fixed;
        background-repeat: no-repeat; 
        width: 100%;
        max-width: 100%;
        position: absolute;
    }

    .contenedor{
        text-align: right;
        position:static;
        justify-content: justify;
        margin-top: 20rem;
        margin-right: 5rem;
    }

    .imagen{
        width: "150";
        background: url({{}});
        align-content:center;
        justify-content: flex-start;
        margin-left: 24px;
        margin-top: 15%;
        z-index: 1;
    }

    .button{
        border-width: 1px;
        border-radius: 30px ;
        padding: 11px 23px; 
        background-color: transparent;
        margin-left: 10px;
        width:40;
        color: #1247dacc;
    }

    h1{
        font-family: 'Neuton', serif;
        font-size:4rem;
        letter-spacing: 0.5px;
        z-index: 1;
        color: white;
    }

    h2{
        font-family: 'Roboto', sans-serif;
        font-size:1rem;
        letter-spacing: 1.5px;
        color: black;
    }

`;

export default PageHeader;