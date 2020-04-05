import React from "react"
import WavesSection from '../components/waves.js'
import PageHeader from '../assets/css/StyleImagenHome'
import ScrollMarcas from './ScrollMarcas'



// core components

function ImagenHome() {
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

  

  const handleClick = () =>
        document.getElementById('form').scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
  
  return (
    
    <PageHeader> 
        <div className='contenedor' ref={pageHeader}>                                 
          <h1 ref={pageHeader}>Uno Electromedicina</h1>
          <h2 ref={pageHeader}>Servicio técnico y venta de equipamiento e insumos de laboratorio.</h2>            
            <button ref={pageHeader} type='button' onClick={handleClick}>                    
            Contáctenos
            </button >          
        </div>
      <span> 
          <img src={require('../assets/img/logouno.png')} alt='logo'/> 
        </span>
        <div className='descripcion'>hola </div>
      <ScrollMarcas />
    </PageHeader>   
    
  );
}

export default ImagenHome;
