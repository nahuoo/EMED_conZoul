import React from 'react'
import styled from 'styled-components'

const Bodyy = styled.div`
  display: grid;
  grid-template-columns: repeat(3,250px);
  grid-gap: 2vh;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 10vh;
  padding:5%;
  overflow: hidden;
@media screen and (max-width:400px){
  grid-template-columns: repeat(250px);
}
  h1{
    grid-column: 1/4;
    text-align:center;
    padding-right: 6%;
    font-size: 2em;
    margin-bottom: 20px;
  }

  div{
    
    border: 1.5px solid #E3E3E3;
    border-radius: 30px;
    color: #2c2c2c;
    height: 2em;
    width: 200px;
    cursor: pointer;
    font-size: 0.8571em;
    display: flex;
    
    
    align-items: center;
    justify-content:center;
    font-family: 'Roboto', sans-serif;
    
    :hover{
      border: 2px solid red;
      box-shadow: 20px 10px 20px -5px rgba(0, 0, 0, 0.2);
    }
  }

  `

const CuerpoHome = () => {

  return(
    <Bodyy>
      <h1>Categorías</h1>
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