import React from "react";
import styled from "component-styled"

const Section = styled.div`
.section{
  padding: 70px 0;
  position: relative;
  background: $white-color;

  .category{
      margin-top: $margin-base-vertical;
  }
}
.col{}
display: flex;
  align-items: center; 
  `;
  
function Texto() {
  return (
    
      <Container>
        <div>     
            <img
              alt="Uno electromedicina"
              width="150"
              src={require("assets/img/logonavidad.jpg")}
            ></img>
            <h2>Quienes somos?</h2>
            <h3>
              Uno Electromedicina se dedica al servicio técnico y venta de
              equipos e insumos de laboratorio.
            </h3>
          </div>
        
              <div
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/papa1.jpg") + ")"
                }}
              ></div>
              <div              
                style={{
                  backgroundImage: "url(" + require("assets/img/bg3.jpg") + ")"
                }}
              ></div>
              <div               
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/taller2.jpg") + ")"
                }}
              ></div>
              <h3>Una breve historia</h3>
              <p>
                Fue fundada en .... por Jose Sigismondi njkaedlakenakldenk
                aeidjaed jaied adjanedlkajed aed.
              </p>
              <p>
                asdasdasdaskdnaskldnaslkdmjalksdklamckmaslkmcamslkcamsklmaksldmlkalkamdmake
                aedljaelda.
              </p>
              <p>
                edajneanm aedj jkae daje dajeoaeijdiaj oaejdaiedj
                aoiejdaedkmlaejnd aokejdmlkaedjka ajednla.
              </p>           
      </Container>
    
  );
}

export default Texto;
