import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
function MyNavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="header">
        <Container>
          <Navbar.Brand href="#home">
            <img src="images/nav-logo.png" alt="image" className="nav-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto  nav-item">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="About">About</Nav.Link>
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="Services">Services</NavDropdown.Item>
                <NavDropdown.Item href="Services">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="Services">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="Services">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Project" id="collasible-nav-dropdown">
                <NavDropdown.Item href="Project">Project</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pages" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pages</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavBar
