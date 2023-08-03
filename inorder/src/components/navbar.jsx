import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import {Navbar,Image} from 'react-bootstrap/';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
function navbar() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary  mx-4 my-3">
          <Container fluid>
            <Navbar.Brand href="#"><Image src="logo.png"  width={"220px"} height={"75px"}/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link  href="#action1" className ="nav-link">Home</Nav.Link>
                  <Nav.Link href="#action2" className ="nav-link">Blog</Nav.Link>
                  <Nav.Link href="#action2" className ="nav-link">How it Works</Nav.Link>
                </Nav>
                  <Button id = "try-it" >Try it Free <FontAwesomeIcon icon={faPlay} /></Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} 
    </>
  );
}

export default navbar;