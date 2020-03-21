import React from "react";
import styled from 'styled-components';
import fotoTaller from '../assets/img/taller.jpg';
//styles
  
const Container = styled.div `

  z-index: 1;
  text-align: center;
  position:static;
  justify-content: justify;
`;    

const PageHeader = styled.div `
  color: rgba(255, 255, 255, 0.5); 
  position: relative;
  background-image: url("${fotoTaller}");
  height: 680px; /* You must set a specified height */
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
`;

const HeaderImage = styled.div `

  height: 200px; /* You must set a specified height */
  

   
`;
const Imagen = styled.img`
align-content:space-around;
margin-left: 24px;
`;
const H2 = styled.h2`
  color:white;
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
const handleClick = () =>
  document.getElementById("name").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

function Header() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
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
    <>
      <PageHeader>
      <HeaderImage ></HeaderImage>
          <div ref={pageHeader}>
          <Container>
          <div>
           <Imagen
            alt="Logo UNO"
            
            width="150"
            src={require("../assets/img/logouno.png")}
            />         
            <H2>Venta y servicio técnico de laboratorios</H2>
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
       
              
     
      </PageHeader>     
        
    </>
  );
}

export default Header;
