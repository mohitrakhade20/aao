import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../App.css";
import { Container, Navbar, Nav, Card, Button } from 'react-bootstrap';


const Home = () => {

return(
  <>
  <div className="container">
    {/* <Header/> */}

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
      <Link to="/meta" className="link">
        <Button className='button-schema' variant="outline-light"> 
          Meta
        </Button>
      </Link> 
    </Container>
  </Navbar>
  </div>

  <Card className="text-center card-style">
  <Card.Header>AAO</Card.Header>
  <Card.Body className='card-body'>
    <Card.Title>Againest All Odds</Card.Title>
    <Card.Text>
      Storing user inforamtion in moralis DB
    </Card.Text>
    <Link to="/profile">
    <Button variant="dark">LogIn Or Sign Up</Button>
    </Link>
  </Card.Body>
  <Card.Footer className="text-muted">@devmohit</Card.Footer>
</Card>

  </>
)
}

export default Home;
