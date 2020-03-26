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
height: 50px;
padding: 4px;

background: ${(props) => props.background|| 'rgba(0,0,0,0)'};
color: #FFFFFF;
z-index: 2;
font-size: 110%;
font-family: 'Neuton', serif;
transition: all 0.8s ease-out;
.Animation{
  animation: fadeIn ease 6s;
    -webkit-animation: fadeIn ease 6s;
    -moz-animation: fadeIn ease 6s;
    -o-animation: fadeIn ease 6s;
    -ms-animation: fadeIn ease 6s;
  
  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-moz-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-webkit-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
 
} 

/* ListaLink es el <ul> que con tiene todos los <li> */
.ListaLink{
  margin-right: 3%;
}
/* Estos son los li dentro de los <ul> */
.ListaLink li{
  display: inline-block;
  padding: 0px 3px;

}
/* .link son los <a> y <navlinks> dentro de los <Li> */
.link{
  color: white;
  transition: all 0.2s ease 0s;
  text-decoration: none;
  border-radius: 5px;
  padding: 10px 14px 12px;
  letter-spacing: 1px;
}
/* Efecto de fondo blanco en los items links */
.selected:hover{
  background-color: rgba(234, 241, 241, 0.3);
  color: #fff; 
}

/* Segunda clase que le di a los iconos de FB e Insta ya que tienen distintas dimensiones que las letras, asi que les ajusto el padding */
.icono{
  padding: 10px 10px 7px;
}
/* Clase del texto del logo para que este bien alineado a todo */
.title{
margin-left: 0;
margin-right: 10%;
cursor: default;
}

/* Div contenedor de la <img> con el logo */
.logo{
  padding: 5px;
  height: 3rem;;
  margin-right: 1em;  
  margin-left: 0;
}
/* Ajusto la imagen para que tome el 100% tamaño del div contenedor */
.logo img {
    max-width: 100%;
    max-height: 100%;
  }
`


  

const Navbar = () => {
  const [navbarColor, setNavbarColor] = React.useState('rbga(0,0,0,0)')
  const [navbarAnimation, setNavbarAnimation] = React.useState('')
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 400 ||
        document.body.scrollTop > 400
      ) {
        setNavbarColor('rgba(22, 161, 178,0.8)')
        setNavbarAnimation('Animation')
      } else if (
        document.documentElement.scrollTop < 401 ||
        document.body.scrollTop < 401
      ) {
        setNavbarColor('rgba(0,0,0,0)')
        setNavbarAnimation('')
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

    return(
    <StyledNav background={navbarColor} classname={navbarAnimation} >
      <div className="logo">
      <NavLink
          to="/"
          exact>
            <img src={require('../assets/img/logouno.png')} alt='logo'/>     
      </NavLink>
      </div>
      <ul className="ListaLink">
        <li>
          <span className="link title">Uno electromedicina</span>
        </li>
        <li>
          <NavLink
            to="/about"
            className="link selected">
              Sobre Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="link selected">
              Contáctenos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service"
            className="link selected">
              Servicio Técnico
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productos"
            className="link selected">
              Productos
          </NavLink>
        </li>
        <li>
          <a
            href="https://www.instagram.com/unoelectromedicina/"
            target="_blank"
            rel="noopener noreferrer"
            className="link icono selected">
              <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </a>
        </li>  
        <li>
          <a
            href="https://www.facebook.com/uno.electromedicina/"
            target="_blank"
            rel="noopener noreferrer"
            className="link icono selected">
              <i class="fa fa-facebook-official fa-2x" aria-hidden="true" ></i>
          </a>
        </li>  
      </ul> 
    </StyledNav>
  )
}
export default Navbar