import React from "react";
import styled from 'styled-components';
import fotoTaller from '../assets/img/taller.jpg';
import WavesSection from './waves.js'

//styles
  



//css
const Container = styled.div `

  
  text-align: left;
  position:static;
  justify-content: justify;
  margin-top: 20rem;
  margin-left:1rem;


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
  background-size: cover ;
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

const Imagen = styled.img`
align-content:space-around;
margin-left: 24px;
margin-top: 15%;
z-index: 1;
`;


const H2 = styled.h2`
font-family: 'Crete Round', serif;

font-size:4rem;
letter-spacing: 1.5px;
z-index: 1;
color: white;
`;


const H4 = styled.h4`
font-family: 'Crete Round', serif;

font-size:1rem;
letter-spacing: 1.5px;

color: white;
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
    
    <div Style={{
      height: '600rem',
      margin:0,
      paddin:0
    }}>
    
    <PageHeader>
    <Filtro></Filtro> 
      
          <div ref={pageHeader}>
          <Container>
          <div>
          {/* <Imagen
            alt="Logo UNO"
            
            width="150"
            src={require("../assets/img/logouno.png")}
          />         */}
            <H2>Uno electromedicina</H2>
            <H4>Venta y Servicio técnico</H4>
          </div>  
             
          <Container>
            <Row>              
                <Button                  
                  onClick={""}
                >
                  Contáctenos
                </Button>
              
            </Row>
          </Container>
            
        </Container>
      
          
          </div>
       
              
          <WavesSection /> 
          
      </PageHeader>   
         
      </div>
    
  );
}

export default ImagenHome;
