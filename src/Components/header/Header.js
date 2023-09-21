import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Header.css'

function Header() {
  return (
    <Navbar className="mainHeader">
      <Container >
        <Navbar.Brand><Link to={'/'}><img src={process.env.PUBLIC_URL + '/assets/images/you-logo-here.png'} width={'30%'} alt='' /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav><Link to={'/'}>Home</Link></Nav>
            <Nav><Link to={'/contact'}>Contact</Link></Nav>
            <Nav.Item className='btnPrim'>
              <Button variant="dark">Contact Now</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header