import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <Navbar className='mainHeader'>
      <Container fluid>
        <Navbar.Brand><Link to={'/'}><img src={process.env.PUBLIC_URL + '/assets/images/you-logo-here.png'} width={'30%'} alt=''/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto menuItems'>
            <Nav.Item>
              <Link to={'/'}>Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={'/contact'}>Contact</Link>
            </Nav.Item>
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