import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import '../assets/font-awesome-4.7.0/css/font-awesome.min.css'
import device from '../assets/css/Responsive'

const StyledFooter = styled.footer`
  
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 67%, rgba(22, 161, 178, 1) 100%);
  padding: 7.5vh 0;
  color: #f2f2f2;

  ul {
    height: 18vh;
  }
  ul li{
    padding: 0 0 0.5rem;
    margin:0 0 0.5rem;
    font-weight: bold;
    font-size: 9.5px;
    font-family: 'Merriweather Sans', sans-serif;
    letter-spacing: 0.5pt;
  }
  ul li a {
    color: inherit;
    text-decoration: none;
      
  }
  ul li a:hover {
    color: #16A1B2;
  }
  .copyright {
    font-size: 8px;
    position: absolute;
    align-self: flex-end;
    left: 33%;
  }
  .icon {
    display: none;
  }
  .direction {
    line-height: 20px; 
  }

  @media (min-width: 768px) {


  }
 
`

function Footer() {
  return (
    <StyledFooter>
        <div>
          <ul>
            <li>
              <Link to="/contact">
                Contacto
              </Link>
            </li>
            <li>
            
              <Link to="/about">
                Sobre Nosotros 
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.google.com.ar/maps/place/Chaco+801,+B7600BKQ+Mar+del+Plata,+Buenos+Aires/@-37.9833588,-57.5609986,17z/data=!4m5!3m4!1s0x9584d95a18c9fcd9:0x9d2f9ec1205da2e9!8m2!3d-37.9829465!4d-57.5590997"
                rel="noopener noreferrer"
                >
                  <p>Chaco 801, Mar del Plata</p><p className="direction">(B7600BKQ)</p>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <i className="fa fa-envelope-o icon" aria-hidden="true">&nbsp;</i>
              <a href="mailto:unoelectromedicina@gmail.com" target="_blank" rel="noopener noreferrer">
                E-Mail:&nbsp;unoelectromedicina@gmail.com
              </a>
            </li>
            <li>
              <i className="fa fa-facebook-official icon" aria-hidden="true">&nbsp;</i>
              <a href="https://www.facebook.com/uno.electromedicina/" target="_blank" rel="noopener noreferrer">
                Facebook:&nbsp;/uno.electromedicina
              </a>
            </li>
            <li>
              <i className="fa fa-instagram icon" aria-hidden="true">&nbsp;</i>
              <a href="https://www.instagram.com/unoelectromedicina/">
                Instagram:&nbsp;/unoelectromedicina
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          {new Date().getFullYear()}, Uno Electromedicina © Todos los derechos reservados.
        </div>
        
      </StyledFooter>
  );
}

export default Footer;
