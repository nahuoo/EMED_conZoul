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
    
    
    <PageHeader>
        <div classname='filtro'></div>
          <div classname='contenedor' ref={pageHeader}>          
            <div classname='imagen' />              
            <h1>Uno electromedicina</h1>
            <h2>Venta y Servicio técnico</h2>             
              <button classname='button'                  
              onClick={""}
              >
                Contáctenos
              </button>          
           </div>             
           <WavesSection />
      </PageHeader>       
  );
}

export default ImagenHome;
