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
import Carrousel from './components/Carrousel'


function App() {

  
  return (
    <div>
      <GlobalStyle />
      {/* <NavBar />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/service" component={Service} />
        <Route path="/productos" component={Productos} />
        <Route component={NotFound} />
      </Switch>
      <Footer /> */}
      <Carrousel images={['https://images.pexels.com/photos/3068107/pexels-photo-3068107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                 'https://images.pexels.com/photos/2886284/pexels-photo-2886284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                 'https://images.pexels.com/photos/3617460/pexels-photo-3617460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940']} />
    </div>
    
      

  );
}

export default App




