import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function form() {
  return (
    <div >
      <Navbar id="navbar1">
        <Navbar.Brand href="#">shaadi Mubarak</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link href="/Home">Home</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item>Weddings</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Private Events
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Card">Gallery</Nav.Link>
            <Nav.Link href="/Registration">Registration</Nav.Link>
            <Nav.Link href="/ Login">login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
