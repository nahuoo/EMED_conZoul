import React, { useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import propTypes from 'prop-types'
import styled from 'styled-components'
import img1 from '../assets/img/slider-numak.jpg';

const FlechaIzquierda = styled.button`
  background-color: rgba(0,0,0,0); /*transparente*/
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`

const FlechaDerecha = styled.button`  
  background-color: rgba(0,0,0,0); /*transparente*/
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: right;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`

const DivCarrousel = styled.div`
  width: 100%;
  height: 50vh;
  background: white;
  overflow: hidden;
  position: relative;
  margin-top: 4rem;
  margin-bottom: 10vh;
/* Botones de atras siguiente */
.Carrousel_Buttons {
  display:flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  height:100%;
  width:100%;
}
/* Tamaño de las fotos */
.Carrousel_Img {
  width: 100%;
  height: 100%;
  position: absolute;
}
/*Cuando Aparece desde la nada la imagen nueva*/
.Slide-enter {
  position: absolute;
  transform: translateX(-100%);
  opacity: 0;
}
/* Cuando la imagen nueva se establece como la actual */
.Slide-enter-active {
  position: absolute;
  transform: translateX(0%);
  opacity: 1;
  transition: all 1s ease;
}
/*Cuando la imagen va a ser reemplazada por la nueva */
.Slide-exit {
  position: absolute;
  transform: translateX(0%);
  opacity: 1;
}
/* Cuando esta llegando la otra imagen */
.Slide-exit-active {
  position: absolute;
  transform: translateX(100%);
  opacity: 0;
  transition: all 1s ease;
}

`



const Carrousel = ({images}) => {
  const [ activeIndex, setActiveIndex ] = useState(0)

  //Generamos la logica de que cuando esta al comienzo, salte al final, y que cuando esta al final, salte al comienzo
  const left = () => {
    if(activeIndex > 0){
       setActiveIndex(activeIndex - 1)
     }
     else {
       setActiveIndex(images.length - 1)
     }
  }
  const right = () => {
    if(activeIndex < images.length - 1){
     setActiveIndex(activeIndex + 1)
    }
    else {
      setActiveIndex(0)
    }
  }
  // Transition clona un objeto que acaba de cambiar, en este caso la imagen al cambiar el indice, y a ese clon le mete animaciones
  // para hacer efectos lindos
  return(
    <DivCarrousel>
      <div className='Carrousel_Buttons'>
        <FlechaIzquierda onClick={left}><i class="fa fa-angle-left" aria-hidden="true"></i></FlechaIzquierda>
        <FlechaDerecha onClick={right}><i class="fa fa-angle-right" aria-hidden="true"></i></FlechaDerecha>
              
      </div>
      <TransitionGroup>
        <CSSTransition
          timeout={1000}   // Aca manejas los segundos que vive un clon, hay que tocarlo en conjunto con las transiciones de css.
          classNames='Slide'
          key={activeIndex}
          >
                <img src={images[activeIndex]} alt='titulo' className='Carrousel_Img'/>
        </CSSTransition>
      </TransitionGroup>
    </DivCarrousel>
  )
}
Carrousel.defaultProps = {
  images: [img1,img1,img1]
}

Carrousel.propTypes = {
  images: propTypes.arrayOf(
    propTypes.string
  )
}

export default Carrousel