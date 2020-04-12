import React from 'react'
import { NavLink } from 'react-router-dom'
import StyledNav from '../assets/css/StyledNavbar'



const Navbar = () => {
  const [ navbarColor, setNavbarColor ] = React.useState('rbga(0,0,0,0)')
  const [ navbarAnimation, setNavbarAnimation ] = React.useState('')
  const [ toggle,setToggle ] = React.useState(false)
  const [ products, setProducts ] = React.useState(false)
  React.useEffect(() => {
    const updateNavbarColor = () => {
      
      if (
        document.documentElement.scrollTop > 100 ||
        document.body.scrollTop > 100
      ) {
        setNavbarColor('rgba(22, 161, 178,0.8)')
        setNavbarAnimation('Animation')

      } else if (
        document.documentElement.scrollTop < 101 ||
        document.body.scrollTop < 101
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
  const handleEnter = () =>{
    setProducts(true)
  }
  const handleLeave = () =>{
    setProducts(false)
  }
  
  return(
      <StyledNav background={navbarColor} className={navbarAnimation}>
      <div className="logo">
        <NavLink
          to="/"
          exact>
            <img src={require('../assets/img/logouno.png')} alt='logo'/>
        </NavLink>
        <span className="title" to="/" >Uno Electromedicina</span>     
      </div>
       <ul className={`ListaLink ${toggle ? 'active' : 'hidden' }`}>
        <li>
          <NavLink
            to="/about"
            className="link"
            activeClassName='navActive'
            onClick={handleClick}>
              Sobre Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="link"
            activeClassName='navActive'
            onClick={handleClick}>
              Contáctenos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="link"
            activeClassName='navActive'
            onClick={handleClick}>
              Servicio Técnico
          </NavLink>
        </li>
        <li>
          <button className="link"  onFocus={handleEnter} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            Productos
            <span className="arrow"></span> 
          </button>
          <div className={`productos ${products ? 'activeProds' : 'hiddenProds' }`}>
            <ul  onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
              <li>Agitadores</li>
              <li>Autoanalizadores quimica clínica</li>
              <li>Baño termicos</li>
              <li>Biomarcadores de urgencia</li>
              <li>Cabinas flujo laminar</li>
              <li>Centrífugas</li>
              <li>Coagulómetros</li>
              <li>Contadores hematológicos</li>
              <li>Estufas de cultivo</li>
              <li>Estufas de esterilización</li>
              <li>Gases en sangre</li>
              <li>Ion selectivo</li>
              <li>Microscopios</li>
              <li>Quimioluminiscencia</li>
            </ul>
          </div>
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