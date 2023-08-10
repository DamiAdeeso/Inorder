import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Image } from 'react-bootstrap/';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Signinform from './Signinform';
function PageNav() {
  // had issues with 2 oof canvas side bars code below fixes that
  const navigate = useNavigate();
  const [show2, setShow2] = useState(false);
    const handleShow2 = () => setShow2(true);
    const handleClose2 = () => setShow2(false);
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary  mx-4 my-3">
          <Container fluid className="d-flex navbar-custom">
            <Navbar.Brand href="/"><Image src="logo.png" width={"160"} /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleShow2}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show ={show2}
              onHide = {handleClose2}
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                  <Nav.Link href="/blog" className="nav-link">Blog</Nav.Link>
                  <Nav.Link href="/how-it-works" className="nav-link">How it Works</Nav.Link>
                </Nav>
                <Signinform/>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default PageNav;