import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
/* Contenedor padre, es un <nav> */
display: flex;
justify-content: flex-end;
align-items: center;
position: fixed;
width: 100vw;
height: 93px;
padding: 15px;
background: rbga(0,0,0,0);
color: #FFFFFF;
z-index: 1;
font-size: 130%;
/* ListaLink es el <ul> que con tiene todos los <li> */
.ListaLink{
  margin-right: 3%;
}
/* Estos son los li dentro de los <ul> */
.ListaLink li{
  display: inline-block;
  padding: 0px 7px;

}
/* .link son los <a> y <navlinks> dentro de los <Li> */
.link{
  color: #FFFFFF;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  border-radius: 5px;
  padding: 10px 14px 12px;
  border: 1px solid white;
}
.link:hover{
  background-color: #EAF1F1;
  opacity:20%  
}
/* Segunda clase que le di a los iconos de FB e Insta ya que tienen distintas dimensiones que las letras, asi que les ajusto el padding */
.icono{
  padding: 20px 10px 7px;
  
}
/* Div contenedor de la <img> con el logo */
.logo{
  padding: 10px;
  height: 93px;;
  margin-right: auto;  
}
/* Ajusto la imagen para que tome el 100% tamaño del div contenedor */
.logo img {
    max-width: 100%;
    max-height: 100%;
  }
`

const Navbar = () => {
  return(
    <StyledNav>
      <div className="logo">
      <NavLink
          to="/"
          exact>
            <img src={require('../assets/img/logouno.png')} alt='logo'/>
      </NavLink>
      </div>
      <ul className="ListaLink">
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
            className="link icono">
              <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </a>
        </li>  
        <li>
          <a
            href="https://www.facebook.com/uno.electromedicina/"
            target="_blank"
            rel="noopener noreferrer"
            className="link icono">
              <i class="fa fa-facebook-official fa-2x" aria-hidden="true" ></i>
          </a>
        </li>  
      </ul> 
    </StyledNav>
  )
}
export default Navbar