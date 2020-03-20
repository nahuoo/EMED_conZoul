import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  //DropdownMenu,
  //DropdownItem,
  //UncontrolledDropdown,
 // NavbarBrand,
 // Navbar,
  //NavItem,
  //NavLink,
  //Nav,
  Container,
  //UncontrolledTooltip
} from "../assets/css/css";
// ITEMS DE NAVBAR

function imagen() {
  return (
    <img alt="Logo UNO" width="50" src={require("../assets/img/logouno.png")} />
  );
}

const imagenScroll = () => {
  if (
    document.documentElement.scrollTop > 399 ||
    document.body.scrollTop > 399
  ) {
    imagen();
  }
};

function imagenAparece() {
  return imagenScroll;
}

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <br />
            <NavbarBrand>
              <img
                alt="Logo UNO"
                width="50"
                src={require("../assets/img/logouno.png")}
              />
              Uno electromedicina
            </NavbarBrand>

            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href=""
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <i></i>
                  <p>Servicio Técnico</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href=""
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i></i>
                  <p>Venta</p>
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    Insumos
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Equipos
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink
                  href="https://www.facebook.com/uno.electromedicina/"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Seguinos en Facebook!
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/unoelectromedicina/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Seguinos en Instagram!
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
