import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import React  from 'react';

const HeaderLoggedIn = () => {
    return ( 
        <div className="Header">
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
                <NavDropdown
                    title="User Name"
                  >
                    <NavDropdown.Item href="#profil">Profil</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#logOut">
                      Se déconnecter
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
            </Container>
          </Navbar>
        </div>
     );
}
export default HeaderLoggedIn;
