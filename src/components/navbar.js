import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
position: fixed;
width: 100vw;
height: 13vh;
background: #16A1B2;
color: #000000;
z-index: 1;
font-size: 130%;
ul{
  max-height: 100%;
  display: flexbox;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;
  list-style: none;
  margin-right: 10%;
  }
ul li{
  max-height: 100%;
  padding: 0.7rem 1rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
}
ul li:hover{
  background-color: #265CEF;
}
.link{
  color: #FFFFFF;
  text-decoration: none;
}

.logo{
  float: left;
  height: 90%;
  margin-left: 5%;
}
`

const Navbar = () => {
  return(
    <StyledNav>
      <NavLink
          to="/"
          exact>
            <img className="logo" src={require('../assets/img/logouno.png')} alt='logo'/>
      </NavLink>  
      <ul>
        <li>
          <NavLink
            to="/about"
            className="link">
              Sobre Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="link">
              Contactenos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service"
            className="link">
              Servicio Técnico
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productos"
            className="link">
              Productos
          </NavLink>
        </li>
        <li>
          <a
            href="https://www.instagram.com/unoelectromedicina/"
            target="_blank"
            rel="noopener noreferrer"
            className="link">
              <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </a>
        </li>  
        <li>
          <a
            href="https://www.facebook.com/uno.electromedicina/"
            target="_blank"
            rel="noopener noreferrer"
            className="link">
              <i class="fa fa-facebook-official fa-2x" aria-hidden="true" ></i>
          </a>
        </li>  
      </ul> 
    </StyledNav>
  )
}
export default Navbar