import { Navbar, Container, Nav, Button, } from "react-bootstrap";
import React  from 'react';

const Header = () => {
    return ( 
        <div className="header">
          <Navbar variant="light">
            <Container style={{"flex-flow":"row wrap"}}>
                <Navbar.Brand href="/"><img alt="logo" style={{"width":"40px"}} src={process.env.PUBLIC_URL+"DP.png"}/>
                &nbsp;Discount Picker</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/" >Accueil</Nav.Link>
                  <Nav.Link href="promos">Promos</Nav.Link>
                  <Nav.Link href="about">A propos</Nav.Link>
                </Nav>
                <div style={{"margin-left":"auto"}}>
                  <Button variant="info" href="login">Se connecter</Button>
                  <Button variant="info" href="signup">S'inscrire</Button>
                </div>
            </Container>
          </Navbar>
        </div>
     );
}
export default Header;