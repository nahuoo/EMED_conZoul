import React from 'react'
import ImagenHome from '../components/ImagenHome'
import CuerpoHome from '../components/CuerpoHome'
import Marcas from '../components/Marcas'
import Formulario from '../components/Formulario'
import styled from 'styled-components'
import fotoTaller from '../assets/img/lab3.jpg';

const Transparente = styled.div `
  background: rgba(255, 255, 255, 0.4);
  background-image: url("${fotoTaller}");
  background-position: center;
  background-attachment: fixed; 
  background-repeat: no-repeat; 
  background-size: cover;
 
  
`


/*  El Home */
const Home = () => {
 /* const [visible, setVisible] = React.useState(false) */
  return (
    <Transparente>
      <ImagenHome />
      <Marcas />
      <CuerpoHome />
      <Formulario />
    </Transparente>
  )
}


export default Home