import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import '../assets/font-awesome-4.7.0/css/font-awesome.min.css'

const FooterStyled = styled.footer`
  
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 24px 0;
  background: linear-gradient(0deg, rgba(21,21,21,1) 67%, rgba(55,53,53,1) 100%);
  color: #f2f2f2;
  box-shadow: -2px -2px 2px 1px rgba(126, 114, 144, 0.5);
  font-family: inherit; 
  
  ul {
    margin-bottom: 0;
    padding: 0;
    list-style: none; }
  ul li{
    padding: 0 0 0.5rem;
       }
      ul li a {
        color: inherit;
        padding: 0.5rem;
        font-size: 0.8571em;
        text-decoration: none; }
        ul li a:hover {
          color: red; }
  .copyright {
    align-self: flex-end;
    font-size: 0.8571em;
    }

`

function Footer() {
  return (
    <FooterStyled>
        <div classname="contacto" >
          <ul>
            <li>
              <Link to="/contact">
                CONTACTO
              </Link>
            </li>
            <li>
            
              <Link to="/about">
                SOBRE NOSOTROS
              </Link>
            </li>
            <li>
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <a
                target="_blank"
                href="https://www.google.com.ar/maps/place/Chaco+801,+B7600BKQ+Mar+del+Plata,+Buenos+Aires/@-37.9833588,-57.5609986,17z/data=!4m5!3m4!1s0x9584d95a18c9fcd9:0x9d2f9ec1205da2e9!8m2!3d-37.9829465!4d-57.5590997"
                rel="noopener noreferrer"
                >
                  CHACO 801, MAR DEL PLATA (B7600BKQ)
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <i className="fa fa-envelope-o" aria-hidden="true">&nbsp;E-Mail:&nbsp;</i>
              <a href="mailto:unoelectromedicina@gmail.com" target="_blank" rel="noopener noreferrer">
                unoelectromedicina@gmail.com
              </a>
            </li>
            <li>
              <i class="fa fa-facebook-official" aria-hidden="true">&nbsp;Facebook:&nbsp;</i>
              <a href="https://www.facebook.com/uno.electromedicina/" target="_blank" rel="noopener noreferrer">
                /uno.electromedicina
              </a>
            </li>
            <li>
              <i class="fa fa-instagram" aria-hidden="true">&nbsp;Instagram:&nbsp;</i>
              <a href="https://www.instagram.com/unoelectromedicina/">
                /unoelectromedicina
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          {new Date().getFullYear()}, Uno Electromedicina © Todos los derechos reservados.
        </div>
        
      </FooterStyled>
  );
}

export default Footer;
