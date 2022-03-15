import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../App.css";
import { Container, Navbar, Nav, Card, Button } from 'react-bootstrap';

const NavbarC =() => {
    return(
    <div className="container">

    <Navbar className='nav-schema' variant="dark">
    <Container>
      
      <Link to="/" className="link">
        <Button className='button-schema' variant="outline-light"> 
        Home
        </Button>
      </Link> 
      <Link to="/user" className="link">
        <Button className='button-schema' variant="outline-light"> 
        Profile Data
        </Button>
      </Link> 
      <Link to="/profile" className="link">
        <Button className='button-schema' variant="outline-light"> 
          Sign Up | Log In
        </Button>
      </Link> 
    </Container>
  </Navbar>
  </div>
    )
}

export default NavbarC