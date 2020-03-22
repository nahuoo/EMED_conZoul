import React from "react";
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import Productos from './pages/productos'
import About from './pages/about'
import Service from './pages/service'
import NotFound from './pages/404'
import Footer from './components/Footer'
import NavBar from './components/navbar'
import WavesSection from './components/waves'
import styled from 'styled-components';
import Texto from './components/Texto';

//const Div = styled.div `
//  height: 13vh;
//  background-color: black;
//`;

function App() {

  
  return (
    <div>
      <NavBar />
      <Texto />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/service" component={Service} />
        <Route path="/productos" component={Productos} />
        <Route component={NotFound} />
      </Switch>
      <WavesSection />
      <Footer />
    </div>
    
      

  );
}

export default App




