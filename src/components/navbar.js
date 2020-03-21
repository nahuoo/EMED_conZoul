import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return(
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            exact>
              <img src={require('../assets/img/logouno.png')} alt='logo'/>
          </NavLink>
        </li>  
        <li>
          <NavLink
            to="/about">
              Sobre Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact">
              Contactenos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service">
              Servicio Técnico
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productos">
              Productos
          </NavLink>
        </li>
        <li>
          <a
            href="https://www.instagram.com/unoelectromedicina/"
            target="_blank"
            rel="noopener noreferrer">
              Instagram
          </a>
        </li>  
        <li>
          <a
            href="https://www.facebook.com/uno.electromedicina/"
            target="_blank"
            rel="noopener noreferrer">
              Facebook
          </a>
        </li>  
      </ul> 
    </nav>
  )
}
export default Navbar