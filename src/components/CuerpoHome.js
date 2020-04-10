import React from 'react'
import styled from 'styled-components'

const Bodyy = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(50px, 150px));
  grid-gap: 2vh;
  background: #2a2f33;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 0vh;
  padding:5%;
  overflow: hidden;
  background: #303136;
  height: auto;
  

@media screen and (max-width:500px){
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height:100vh;
}
@media screen and (max-width:670px){
  display: flex;
  flex-direction: column;
  
}
  h1{
    grid-column: 1/4;
    text-align:center;
    padding-right: 6%;
    font-size: 2em;
    margin-bottom: 20px;
    font-family: 'Neuton', serif;
    color: white;
  }

  div{
    
    margin:10px;
    border: 1.5px solid #E3E3E3;
    border-radius: 30px;
    color: white;
    height: 2em;
    width: 200px;
    cursor: pointer;
    font-size: 0.8571em;
    display: flex;
    user-select: none;
    
    
    align-items: center;
    justify-content:center;
    font-family: 'Roboto', sans-serif;
    
    :hover{
      border: 2px solid #b30000;
      box-shadow: 10px 10px 10px -5px rgba(250, 250, 250, 0.2);
    }
  }

  `

const CuerpoHome = () => {
  let animacion = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 8;
        animacion.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return(
    <Bodyy ref={animacion}>
      <h1>Consulta por nuestras categorías</h1>
      <div>Quimica clínica</div>
      <div>Gases en sangre</div>
      <div>Hematología </div>
      <div>Inmunología</div>
      <div>Ion-selectivo</div>
      <div>Coagulación</div>
      <div>Orinas</div>
      <div>Insumos</div>
      <div>Biomarcadores de urgencia</div>
      
      
    </Bodyy>
  )
}

export default CuerpoHome