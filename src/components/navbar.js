import React from 'react'
import { NavLink } from 'react-router-dom'
import StyledNav from '../assets/css/StyledNavbar'


const Navbar = () => {
  const [ navbarColor, setNavbarColor ] = React.useState('rbga(0,0,0,0)')
  const [ navbarAnimation, setNavbarAnimation ] = React.useState('')
  const [ toggle,setToggle ] = React.useState(false)
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

   
  function handleClick(){

    setToggle(!toggle)
  } 
  
  return(
      <StyledNav background={navbarColor} classname={navbarAnimation}>
      <div className="logo">
        <NavLink
          to="/"
          exact>
            <img src={require('../assets/img/logouno.png')} alt='logo'/>
        </NavLink>
        <span className="link title">Uno electromedicina</span>     
      </div>
       <ul className={`ListaLink ${toggle ? 'active' : 'hidden' }`}>
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
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </a>
        </li>  
        <li>
          <a
            href="https://www.facebook.com/uno.electromedicina/"
            target="_blank"
            rel="noopener noreferrer"
            className="link icono selected">
              <i className="fa fa-facebook-official fa-2x" aria-hidden="true" ></i>
          </a>
        </li>   
      </ul> 
      <div className='burger' onClick={handleClick}>
          <div className='linea1'></div>
          <div className='linea2'></div>
          <div className='linea3'></div>
        </div>  
    </StyledNav>
  )
}
export default Navbar