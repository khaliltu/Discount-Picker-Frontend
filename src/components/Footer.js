import React from 'react';
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
import {
  MDBFooter,
  MDBContainer
} from 'mdb-react-ui-kit';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
export default function Footer() {
  return (
    <MDBFooter className='text-center text-black' style={{"background-color":"#FAFAFA"}}>
      <MDBContainer className='p-4 pb-0'>
        <Container>
          <Row>
            <Col>
              <section>
                <h4>
                  Qui sommes nous?
                </h4>
                <span>
                  Discount Picker est une plateforme qui fait la recherche des meilleures promotions existantes
                  sur les sites e-commerce Tunisiens. Nous avons comme objectif d'aider les internautes à faire 
                  le meilleur choix et à trouver la meilleure qualité à un prix raisonnable.
                </span>
              </section>
            </Col>
            <Col>
              <section className='mb-4'>
                <h4>
                  Trouvez nous sur les réseaux sociaux!
                </h4>
                <br></br>
                <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
                  <FaFacebookF/>
                </a>

                <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
                  <FaTwitter />
                </a>

                <a className='btn btn-outline-dark btn-floating m-1' href='#!' role='button'>
                  <FaInstagram />
                </a>

              </section>
              </Col>
              <Col>
              <Form>
                    <Form.Group controlId="fromEmail" >
                      <h4>
                        S'abonner à la Newsletter
                      </h4>
                      <br></br>
                      <Form.Control style={{"margin":"auto"}} className="w-75" type="email" placeholder="exemple@mail.com"/>
                      <br></br>
                    <Button variant="info" href="#">S'abonner</Button>
                </Form.Group>
              </Form>
              </Col>
            </Row>
          </Container>
          <br></br>
      </MDBContainer>

      <div className='text-center p-3 xl' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
        © 2022 Copyrights: &nbsp;
        <a className='text-black' href='https://discountpicker.com/'>
          discountpicker.com
        </a>
      </div>
    </MDBFooter>
  );
}