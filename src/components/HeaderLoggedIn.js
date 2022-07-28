import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import React  from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Header.css'
import axios from "axios";
const HeaderLoggedIn = () => {
    const navigate=useNavigate();
    const logOut= () => {
      localStorage.clear()
      navigate('/')
    }
    const onProfile = () => {
      axios
        .get(
          'http://127.0.0.1:5000/api/v1/user',
        { headers : { 'Content-Type': 'application/json',
        'token' : localStorage.getItem("token").replace(/['"]+/g, '')}}
        )
        .then( response => {
          localStorage.setItem("user",JSON.stringify(response.data.user));
          navigate('/profile')
        })
        .catch(() => {
          logOut()
        });
    };
    return ( 
        <div className="headerComp">
          <Navbar variant="light">
            <Container style={{"flex-flow": "row wrap"}}>
                <Navbar.Brand href="/"><img alt="logo" className="headerLogo" src={process.env.PUBLIC_URL+"DP.png"}/>
                &nbsp;Discount Picker</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/" >Accueil</Nav.Link>
                  <Nav.Link href="promos">Promos</Nav.Link>
                  <Nav.Link href="about">A propos</Nav.Link>
                </Nav>
                <div className="leftOption profileIcon">
                <NavDropdown id="headerProfile"
                    title={localStorage.getItem("userName").replace(/['"]+/g, '')}
                  >
                    <NavDropdown.Item onClick={onProfile}>Profil</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/" onClick={logOut}>
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
