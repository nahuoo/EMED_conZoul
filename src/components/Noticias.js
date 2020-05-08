import React from 'react'
import Styled from 'styled-components'
import imagen from '../assets/img/sd2.jpg'
import imagen2 from '../assets/img/sd3.jpg'

const NoticiasDiv = Styled.div`
    background:white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30vh;

`

const Noticias = () => {

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
        <NoticiasDiv  >
            <img src={imagen} alt='Sd' /> 
                <div ref={animacion}>
                    STANDARD F100 Analyzer
                    STANDARD F100 is fluorescet immunoassay systems and have been designed for easy and reliable measuring of diverse items.

                    STANDARD F100 is fluorescet immunoassay systems and have been designed for easy and reliable measuring of diverse items. STANDARD F100 is very small and battery powered portable system, so it is the most suitable for making a decision at the point of care.
                    Europium-based fluorescent chemistry - Large Stoke’s shift permits sensitive fluorescence detection
                    No-coding via 2D barcode system
                    Internal quality control
                    Simple and easy to use - Familiar lateral flow test platform
                </div>
            <img src={imagen2} alt='Sd2' />
            <div>
            STANDARD F100 Analyzer
                    STANDARD F100 is fluorescet immunoassay systems and have been designed for easy and reliable measuring of diverse items.

                    STANDARD F100 is fluorescet immunoassay systems and have been designed for easy and reliable measuring of diverse items. STANDARD F100 is very small and battery powered portable system, so it is the most suitable for making a decision at the point of care.
                    Europium-based fluorescent chemistry - Large Stoke’s shift permits sensitive fluorescence detection
                    No-coding via 2D barcode system
                    Internal quality control
                    Simple and easy to use - Familiar lateral flow test platform
            </div>
        </NoticiasDiv>
    )
}

export default Noticias