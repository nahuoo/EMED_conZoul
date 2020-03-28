import styled from 'styled-components';
import fotoTaller from '../img/taller.jpg';
  

const PageHeader = styled.div `

  
  display: flex;  
  flex-wrap: nowrap;
  margin: 0; 
  padding: 0px;
  position: relative;
  align-items:center;
  background-image: url("${fotoTaller}");
  width: 100%;
  max-width: 100%;
  height: 120vh;  
  background-position: center;
  background-attachment: fixed; 
  background-repeat: no-repeat; 
  background-size: cover;
  overflow:hidden;

    .filtro{
        background-color: #16A1B2; 
        background-size: cover;
        position: relative;
    }

    .contenedor{
        text-align: left;
        position: relative;
        align-items: center;           
    }

    .imagen{
        width: "150";
        align-content:center;
        justify-content: flex-start;
        margin-left: 24px;
        margin-top: 15%;
        z-index: 1;
    }

    .button{
        border-width: 1px;
        border-radius: 30px ;
        background-color: transparent;
        margin-left: 10px;
        color: #1247dacc;
    }

    h1{
        font-family: 'Neuton', serif;
        font-size:5rem;
        letter-spacing: 0.5px;
        color: white;
        text-align: left;
        margin-left: 1vw;
        
    }
@media screen and (max-height: 800px) {
    h1{
        font-size:3rem;
        max-width: 100vh;
    }
}
    h2{
        font-family: 'Roboto', sans-serif;
        font-size:1rem;
        letter-spacing: 1.5px;
        color: black;
        margin-left: 1vw;
    }
    @media screen and (max-width: 400px) {
        height: 117vh;   
    }
    @media screen and (max-width: 800px) {
        height: 122vh; 
    }
    @media screen and (max-height: 700px) {
        height: 118vh; 
    }
`;

export default PageHeader;