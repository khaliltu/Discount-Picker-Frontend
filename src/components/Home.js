import { Card, Button, Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect }  from 'react';
import './styles/Home.css';
import axios from "axios";
const Home = () => {
    const loggedIn= localStorage.getItem('token')
    const [products, setProducts]= useState()
    useEffect(()=> {
        try {
        const fetchData = async () =>{
          const result = await  axios.get('http://127.0.0.1:5000/api/v1/home-product',
                                            { headers : { 'Content-Type': 'application/json','number' : 4}});
          setProducts(result.data)
        };   
        fetchData(); 
      } catch(error) {
          console.error(error.message);
       }
        
      },[]);
    return (  
        <div className="bodyPage">
            <Card className="cardElement">
                <div style={{"display":"flex","flex-flow":"row wrap",justifyContent:"space-between"}}>
                        {products && products.map((product)=> ( 
                            <a style={{"width":"20%","color":"black","margin-left":"15px",marginTop:"10px",marginRight:"15px","border":"2px solid black",
                                    textDecoration:"none", padding:"10px",borderRadius:"10px"}} href={'/product/'+product._id.$oid}>
                                <article>
                                    <img style={{width:"200px"}} alt="product" src={product["Image Link"]}></img><br></br><hr></hr>
                                    <small>{product.name}</small><br></br>
                                    <b className="price">{product.price}</b><br></br>
                                    <strike className="old-price">{product["Initial Price"]}</strike>
                                </article>
                            </a>
                        ))}
                </div>
                <Card.Body className="text-center">
                    <h2 >Discount Picker</h2>
                    <Card.Text>Trouvez les meilleurs prix, promotions et ventes flash sur les sites e-commerce Tunisiens<br></br>
                    Naviguez sur une seule plateforme &#38; Achetez partout</Card.Text>
                    <Button variant="info" href="http://localhost:3000/promos" className="formButton">Consulter les promotions</Button>
                </Card.Body>
            </Card>
            {!loggedIn && <Card className="cardElement">
            
                <Card.Body className="text-center">
                    
                    <div style={{"display":"flex","flex-flow":"row wrap","justifyContent":"space-between","margin-bottom":"20px"}}>
                        <a href="https://www.jumia.com.tn/" target="_blank" rel="noopener noreferrer">
                            <img style={{"width":"300px","border":"2px solid black",padding:"10px",borderRadius:"10px"}}
                             alt="jumia" src="https://codepromos.ma/images/coupon/1616757694Jumia-logo.png"></img>
                        </a>
                        <a href="https://tunisiatech.tn/" target="_blank" rel="noopener noreferrer">
                            <img style={{"width":"300px","border":"2px solid black",padding:"10px",borderRadius:"10px"}}
                            alt="tunisiatech" src="https://gde.webmanagercenter.com/wp-content/uploads/2019/02/tunisiatech-logo-gde.jpg"></img>
                        </a>
                        <a href="https://www.vongo.tn/" target="_blank" rel="noopener noreferrer">
                            <img style={{"width":"300px","border":"2px solid black",padding:"10px",borderRadius:"10px"}} 
                            alt="vongo" src="https://www.keejob.com/media/recruiter/recruiter_10049/logo-10049-20190403-163757.jpg"></img>
                        </a>
                    </div><br></br>
                    <h2>Devenir Membre de Discount Picker</h2>
                    <Card.Text>Bénifissez des notifications hebdomadaires &#38; et recommendations personalisées</Card.Text>
                                <Container>
                                    <Row>
                                        
                                        <Col>
                                            <h6>Pas encore membre?</h6>
                                            <Button variant="info" href="signup" className="formButton">Creer un compte</Button>
                                        </Col>
                                    </Row>
                                </Container>
                </Card.Body>
            </Card> }
        </div>
    );
}
 
export default Home;