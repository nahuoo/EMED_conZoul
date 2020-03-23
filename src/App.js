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
<<<<<<< HEAD
import WavesSection from './components/waves'
import styled from 'styled-components';
import Texto from './components/Texto';

//const Div = styled.div `
//  height: 13vh;
//  background-color: black;
//`;
=======
import Header from './components/header'
import GlobalStyle from './assets/css/GlobalStyle'

>>>>>>> 9231ae16e8c1434147602f320f68a795b7d7bd2e

function App() {

  
  return (
    <div>
      <GlobalStyle />
      <NavBar />
<<<<<<< HEAD
      <Texto />
=======
      <Header />
>>>>>>> 9231ae16e8c1434147602f320f68a795b7d7bd2e
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




