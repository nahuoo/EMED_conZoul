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
      <StyledNav background={navbarColor} className={navbarAnimation}>
      <div className="logo">
        <NavLink
          to="/"
          exact>
            <img src={require('../assets/img/logouno.png')} alt='logo'/>
        </NavLink>
        <span className="title">Uno Electromedicina</span>     
      </div>
       <ul className={`ListaLink ${toggle ? 'active' : 'hidden' }`}>
        <li>
          <NavLink
            to="/about"
            className="link"
            activeClassName='navActive'>
              Sobre Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="link"
            activeClassName='navActive'>
              Contáctenos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service"
            className="link"
            activeClassName='navActive'>
              Servicio Técnico
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productos"
            className="link"
            aactiveClassName='navActive'>
              Productos
          </NavLink>
        </li>
        <li>
          <a
            href="https://www.instagram.com/unoelectromedicina/"
            target="_blank"
            rel="noopener noreferrer"
            className="link icono">
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.facebook.com/uno.electromedicina/"
            target="_blank"
            rel="noopener noreferrer"
            className="link icono">
              <i className="fa fa-facebook-official fa-2x" aria-hidden="true" ></i>
          </a>
        </li>  
         
      </ul> 
      <div className='burger' onClick={handleClick}>
          <div className={toggle ? 'on1' : ''}></div>
          <div className={toggle ? 'on2' : ''}></div>
          <div className={toggle ? 'on3' : ''}></div>
        </div>  
    </StyledNav>
  )
}
export default Navbar