import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";



function Mapa() {
  return (
    <>
     <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
            <div className="col">              
              <div id="map">
             

              </div>
              <Button
                className="btn-primary"
                color="primary"
                tag={Link}
              >
                MAPA              
              </Button>
            </div>
            
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Mapa;
