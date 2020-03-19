import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href=""
                target="_blank"
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                href="./nosotros-page"
                target="_blank"
              >
                Sobre nosotros
              </a>
            </li>
         </ul>
            <ul>
            <li>
            <div className="copyright">
             <i className="now-ui-icons location_pin"> </i> 
             <a target="_blank" href="https://www.google.com.ar/maps/place/Chaco+801,+B7600BKQ+Mar+del+Plata,+Buenos+Aires/@-37.9833588,-57.5609986,17z/data=!4m5!3m4!1s0x9584d95a18c9fcd9:0x9d2f9ec1205da2e9!8m2!3d-37.9829465!4d-57.5590997">CHACO 801, Mar del Plata (B7600BKQ) </a>
            </div>
            </li> 
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          {new Date().getFullYear()},  {" "}
          
           
         
           Uno Electromedicina © Todos los derechos{" "}
          
            reservados
          .
           <li>
              <a 
                 
                href="mailto:unoelectromedicina@gmail.com"
                target="_blank"
              >
                e-mail: unoelectromedicina@gmail.com
              </a>
          </li>
              
            
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
