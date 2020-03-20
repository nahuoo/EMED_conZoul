import React from "react";

// reactstrap components
import css 
 from "../assets/css/css";

// core components
const handleClick = () =>
  document.getElementById("name").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

function Header() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/papa1.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>

        <Container classname="bootstrap-switch-lab justify-content-center">
          <div>
            <img
              alt="Logo UNO"
              width="150"
              src={require("../assets/img/logouno.png")}
            />

            <h2 className="h1-seo">Venta y servicio técnico de laboratorios</h2>
          </div>
          <br></br>
          <br></br>
          <Container>
            <Row>
              <Col lg="100%" md="12">
                <Button
                  lg="100%"
                  md="20"
                  width="40"
                  className="btn-round "
                  color="info"
                  onClick={handleClick}
                >
                  Contáctenos
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default Header;
