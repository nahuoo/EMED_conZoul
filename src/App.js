import React from 'react';

//Los componentes:
import Navbar from "components/Navbar.js";
import Header from "components/Header.js";
import Footer from "components/Footer.js";
import Mapa from "components/Mapa.js";
import Carousel from "components/Carousel.js";
import Formulario from "components/Carousel.js";


function App() {

    
       React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <Navbar />
      <Header />
     <div className="main">
        <br />
        <br />
        <Carousel />
        <Texto />
        <Mapa />
        <Formulario />
      </div>
      <Footer />
    </>
  );
}



export default App;
