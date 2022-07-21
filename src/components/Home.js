import { Card, Button, Container, Row, Col } from "react-bootstrap";
import React  from 'react';
const Home = () => {
    return (  
        <div style={{"padding-top":"30px","padding-bottom":"20px"}}>
            <Card style={{"margin":"0px 70px 30px 70px"}}>
                <Card.Img style={{"height":"400px","margin":"auto"}}  src="https://www.comundi.fr/mag-des-competences/wp-content/uploads/2019/11/Image-un-site-e-commerce-performant.png"></Card.Img>
                <Card.Body className="text-center">
                    <h2 >Discount Picker</h2>
                    <Card.Text>Trouvez les meilleurs prix, promotions et ventes flash sur les sites e-commerce Tunisiens<br></br>
                    Naviguez sur une seule plateforme &#38; Achetez partout</Card.Text>
                    <Button variant="info" href="/promos" style={{"max-width":"100%"}}>Consulter les promotions</Button>
                </Card.Body>
            </Card>
            <Card style={{"margin":"0px 70px 20px 70px"}}>
            <Card.Img style={{"height":"400px","margin":"auto"}}  src="https://www.michaelpage.fr/sites/michaelpage.fr/files/styles/advice_node_desktop/public/legacy/shutterstock_1453029959_970x480.jpg?itok=Cr2vM90G"></Card.Img>
                <Card.Body className="text-center">
                    <h2>Devenir Membre de Discount Picker</h2>
                    <Card.Text>Bénifissez des notifications hebdomadaires &#38; et recommendations personalisées</Card.Text>
                                <Container>
                                    <Row>
                                        
                                        <Col>
                                            <h6>Pas encore membre?</h6>
                                            <Button variant="info" href="signup" style={{"max-width":"100%"}}>Creer un compte</Button>
                                        </Col>
                                    </Row>
                                </Container>
                </Card.Body>
            </Card>
        </div>
    );
}
 
export default Home;