import React from "react";
import axios from "axios";
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Modal,
  ModalBody
} from "reactstrap";

function handleSubmit(e) {
  return e.preventDefault();
}

function axios_send() {
  var _name = document.getElementbyId("name").value;
  var _email = document.getElementById("email").value;
  var _message = document.getElementById("message").value;
  return axios({
    method: "POST",
    url: "http://localhost:3000/send",
    data: {
      name: _name,
      email: _email,
      messsage: _message
    }
  });
}
function Formulario() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  return (
    <>
      <div className="section section-contact-us text-center">
        <Container>
          <h2 className="title">Quieres escribirnos?</h2>
          <p className="description">Tu opinión nos importa.</p>
          <Row>
            <Col className="text-center ml-auto mr-auto" lg="6" md="8">
              <InputGroup
                className={
                  "input-lg" + (firstFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons users_circle-08"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  id="name"
                  placeholder="Nombre..."
                  type="text"
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                ></Input>
              </InputGroup>
              <InputGroup
                className={"input-lg" + (lastFocus ? " input-group-focus" : "")}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons ui-1_email-85"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Email..."
                  id="email"
                  type="text"
                  onFocus={() => setLastFocus(true)}
                  onBlur={() => setLastFocus(false)}
                ></Input>
              </InputGroup>
              <div className="textarea-container">
                <Input
                  cols="80"
                  id="message"
                  name="name"
                  placeholder="Escribe un mensaje..."
                  rows="4"
                  type="textarea"
                ></Input>
              </div>

              <div className="send-button">
                <Button
                  type="submit"
                  block
                  className="btn-round"
                  color="info"
                  href=""
                  size="lg"
                  onClick={e => handleSubmit(e) + axios_send + setModal2(true)}
                >
                  Enviar
                </Button>

                <Modal
                  modalClassName="modal-mini modal-info"
                  toggle={() => setModal2(false)}
                  isOpen={modal2}
                >
                  <div className="modal-header justify-content-center">
                    <h5 className="title title-up">Enviado!</h5>
                  </div>

                  <ModalBody>
                    {
                      // este es el modal
                    }
                    <p>Nos contactaremos con usted a la brevedad.</p>
                  </ModalBody>
                  <div className="modal-footer">
                    <Button
                      classname="btn-neutral"
                      type=""
                      color="link"
                      onClick={() => setModal2(false)}
                    ></Button>
                    <Button
                      className="btn-neutral "
                      color="link"
                      type="button"
                      onClick={() => setModal2(false)}
                    >
                      Cerrar
                    </Button>
                  </div>
                </Modal>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Formulario;
