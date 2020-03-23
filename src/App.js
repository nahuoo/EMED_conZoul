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
import Header from './components/header'
import GlobalStyle from './assets/css/GlobalStyle'



function App() {

  
  return (
    <div>
      <GlobalStyle />
      <NavBar /> 
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/service" component={Service} />
        <Route path="/productos" component={Productos} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
    
      

  );
}

export default App




