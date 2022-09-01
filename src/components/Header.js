import { Navbar, Container, Nav, Button, } from "react-bootstrap";
import React  from 'react';
import "../styles/Header.css"
const Header = () => {
    return ( 
        <div className="headerComp">
          <Navbar variant="light">
            <Container style={{flexFlow: "row wrap"}}>
                <Navbar.Brand href="http://localhost:3000/"><img alt="logo" className="headerLogo" src="https://i.ibb.co/G7M6z2T/DP.png"/>
                &nbsp;Discount Picker</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="http://localhost:3000/" >Accueil</Nav.Link>
                  <Nav.Link href="http://localhost:3000/promos">Promos</Nav.Link>
                  <Nav.Link href="http://localhost:3000/about">A propos</Nav.Link>
                </Nav>
                <div className="leftOption">
                  <Button variant="info" href="http://localhost:3000/login">Se connecter</Button>
                  <Button variant="info" href="http://localhost:3000/signup">S'inscrire</Button>
                </div>
            </Container>
          </Navbar>
        </div>
     );
}
export default Header;