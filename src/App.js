import React from "react";
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
//Los componentes:
import IndexNavbar from "./components/navbar.js";
import Header from "./components/header.js";
import Footer from "./components/Footer.js";
// import Mapa from "./components/Mapa";
// import Carousel from "./components/Carousel";
// import Formulario from "./components/Carousel";
// import Texto from "./components/Texto";

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
    <BrowserRouter>
      <IndexNavbar />
      <Header />
      {/* <Route path="/" exact render={navbar} />
      <Route path="/contacto" render={} />
      <Route path="/sobrenosotros" render={} />
      <Route path="/serviciotecnico" render={} />
      <Route path="/productos" render={} /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
