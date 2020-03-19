import React from 'react';

//Los componentes:
import Navbar from "components/Navbars/IndexNavbar.js";
import Header from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Tabs from "./index-sections/Tabs.js";
import Carousel from "./index-sections/Carousel.js";






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
        <Examples />
        <Tabs />
      </div>
      <DarkFooter />
    </>
  );
}



export default App;
