import React, { useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import propTypes from 'prop-types'
import styled from 'styled-components'
import img1 from '../assets/img/slider-numak.jpg';
import img2 from '../assets/img/deposito.jpg';
import img3 from '../assets/img/equipamiento.jpg';
import img4 from '../assets/img/fondo1.jpg';
import img5 from '../assets/img/fondo3.png';

const Flecha = styled.button`
  background-color: rgba(0,0,0,0); /*transparente*/
  border: none;
  color: black;
  padding: 15px 32px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  .Izquierda {
    text-align: left;
  }
  .Derecha {
    text-align: right;
  }
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
.SlideF-enter {
  position: absolute;
  transform: translateX(100%);
  opacity: 0;
}
/* Cuando la imagen nueva se establece como la actual */
.SlideF-enter-active {
  position: absolute;
  transform: translateX(0%);
  opacity: 1;
  transition: all 1s ease;
}
/*Cuando la imagen va a ser reemplazada por la nueva */
.SlideF-exit {
  position: absolute;
  transform: translateX(0%);
  opacity: 1;
}
/* Cuando esta llegando la otra imagen */
.SlideF-exit-active {
  position: absolute;
  transform: translateX(-100%);
  opacity: 0;
  transition: all 1s ease;
}
/*Cuando Aparece desde la nada la imagen nueva*/
.SlideB-enter {
  position: absolute;
  transform: translateX(-100%);
  opacity: 0;
}
/* Cuando la imagen nueva se establece como la actual */
.SlideB-enter-active {
  position: absolute;
  transform: translateX(0%);
  opacity: 1;
  transition: all 1s ease;
}
/*Cuando la imagen va a ser reemplazada por la nueva */
.SlideB-exit {
  position: absolute;
  transform: translateX(0%);
  opacity: 1;
}
/* Cuando esta llegando la otra imagen */
.SlideB-exit-active {
  position: absolute;
  transform: translateX(100%);
  opacity: 0;
  transition: all 1s ease;
}

`



const Carrousel = ({images}) => {
  const [ activeIndex, setActiveIndex ] = useState(0)
  const [ direction, setDirection ] = useState('')

  //Generamos la logica de que cuando esta al comienzo, salte al final, y que cuando esta al final, salte al comienzo
  const Arrow = (e) => {
    
    if(e.target.className === "fa fa-angle-left"){

      setDirection('SlideB')

      if(activeIndex > 0){
        setActiveIndex(activeIndex - 1)
      }
      else {
        setActiveIndex(images.length - 1)
      }
    }

    else{

      setDirection('SlideF')

      if(activeIndex < images.length - 1){
       setActiveIndex(activeIndex + 1)
      }
      else {
        setActiveIndex(0)
      }
    }
    
  }
  
  const handleLi = (e) =>{
    setDirection('SlideF')

    switch(e.target.name){
      case '1':
        setActiveIndex(0)
      break;
      case '2':
        setActiveIndex(1)
      break;
      case '3':
        setActiveIndex(2)
      break;
      case '4':
        setActiveIndex(3)
      break;
      default:
        setActiveIndex(4)
      break;
      
    }
  }
  // Transition clona un objeto que acaba de cambiar, en este caso la imagen al cambiar el indice, y a ese clon le mete animaciones
  // para hacer efectos lindos
  return(
    <DivCarrousel>
      <ul>
        <li><button name='1' onClick={handleLi}>1</button></li>
        <li><button name='2' onClick={handleLi}>2</button></li>
        <li><button name='3' onClick={handleLi}>3</button></li>
        <li><button name='4' onClick={handleLi}>4</button></li>
        <li><button name='5' onClick={handleLi}>5</button></li>
      </ul>
      <div className='Carrousel_Buttons'>
        <Flecha className="Izquierda" onClick={Arrow}><i className="fa fa-angle-left" aria-hidden="true"></i></Flecha>
        <Flecha className="Derecha" onClick={Arrow}><i className="fa fa-angle-right" aria-hidden="true"></i></Flecha>      
      </div>
      <TransitionGroup>
        <CSSTransition
          timeout={1000}   // Aca manejas los segundos que vive un clon, hay que tocarlo en conjunto con las transiciones de css.
          classNames={direction}
          key={activeIndex}
          >
                <img src={images[activeIndex]} alt='titulo' className='Carrousel_Img'/>
        </CSSTransition>
      </TransitionGroup>
    </DivCarrousel>
  )
}
Carrousel.defaultProps = {
  images: [img1,img2,img3, img4, img5]
}

Carrousel.propTypes = {
  images: propTypes.arrayOf(
    propTypes.string
  )
}

export default Carrousel