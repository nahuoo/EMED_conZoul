import React from "react";
import WavesSection from '../components/waves.js'
import PageHeader from '../assets/css/StyleImagenHome';



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
        document.getElementById("form").scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
  
  return (
    
    <PageHeader>
        
        <div className='contenedor' ref={pageHeader}>                                 
          <h1 >Uno Electromedicina</h1>
          <h2>Venta y Servicio técnico</h2>            
            <button type='button' onClick={handleClick}>                    
            Contáctenos
            </button >          
        </div>
      <span> 
          <img src={require('../assets/img/logouno.png')} alt='logo'/> 
        </span>
      <WavesSection />
    </PageHeader>   
    
  );
}

export default ImagenHome;
