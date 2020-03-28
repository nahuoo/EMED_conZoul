import React from "react";
import styled from 'styled-components';
import fotoTaller from '../assets/img/taller.jpg';
import WavesSection from './waves.js';


//styles
  



//css
const Container = styled.div `

  
  text-align: right;
  position:static;
  justify-content: justify;
  margin-top: 20rem;
  margin-right: 5rem;
  padding-bottom: 10em;


`;    

const PageHeader = styled.div `

     
	margin: 10px, 0px, 0px; 
  padding: 0px;
  border-style: none solid none solid;
  border-color: #000;
  color: rgba(255, 255, 255, 0.5); 
  position: relative;
  background-image: url("${fotoTaller}");
  width: 100%;
  max-width: 100%;
  height: auto; 
  background-position:center; 
  background-attachment: fixed; 
  background-repeat: no-repeat; 
  background-size: cover;
  overflow:hidden;
`;

const Filtro = styled.div`

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



`;

const Imagen = styled.div`           
width: "150";
background: url({{}});
align-content:center;
justify-content: flex-start;
margin-left: 24px;
margin-top: 15%;
z-index: 1;
`;


const H2 = styled.h1`
font-family: 'Neuton', serif;

font-size:4rem;
letter-spacing: 0.5px;
z-index: 1;
color: white;
`;


const H4 = styled.h4`
font-family: 'Roboto', sans-serif;

font-size:1rem;
letter-spacing: 1.5px;

color: black;
`;
const Row = styled.div `
margin-top: 3%;
`;

const Button = styled.button `
  border-width: 1px;
  border-radius: 30px ;
  padding: 11px 23px; 
  background-color: transparent;
  margin-left: 10px;
  width:40;
  color: #1247dacc;
`;


// core components
/* const handleClick = () =>
  document.getElementById("name").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
*/
function ImagenHome() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 2;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  
  return (
    
    <div style={{
      height: '600rem',
      margin:0,
      paddin:0
      }}>
    
      <PageHeader>
        <Filtro />
        <div ref={pageHeader}>
          <Container>
            <Imagen />                
            <H2>Uno electromedicina</H2>
            <H4>Venta y Servicio técnico</H4>  
          </Container>
        </div>
        <WavesSection />     
      </PageHeader>      
    </div>
  );
}

export default ImagenHome;
