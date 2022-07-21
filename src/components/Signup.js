import {Form, Card, Container, Row, Col,Button} from "react-bootstrap";
import React, { useState }  from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";


const Signup = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [signup , setSignup] = useState()
    const [message, setMessage] = useState()
    const onSubmit = data => {
        axios
         .post(
             'http://127.0.0.1:5000/api/v1/user',
             data,
             { headers: { 'Content-Type': 'application/json' }}
          )
         .then(response => {
            setSignup(true)
            console.log("success")
            console.log(response)
            console.log(signup)

         })
         .catch(err => { 
            console.log("failure") 
            setSignup(false)
            setMessage(err.response.data.message)
          console.log(err.response.data.message)
        });
     };



    return ( 
    <div style={{"padding-top":"30px","padding-bottom":"20px"}}>
        <Card style={{"margin":"auto","margin-bottom":"20px","width":"35%",
                    "min-width":"400px","padding":"20px 50px 20px 50px "}}>
            <h3 className="text-center">Bienvenue à Discount Picker</h3>
            {signup && <p className="text-center" style={{"color":"green"}}>
                        Inscription réussite! <a href="login" style={{"text-decoration":"underline"}}>
                        Se connecter</a> </p>}
            {!signup && <p className="text-center" style={{"color":"red"}}>
                {message} </p>}
            <br></br>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                <Form.Group controlId="formName" >
                        <Row>
                            <Col>
                                <Form.Label>Prénom</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control {...register("name", {minLength: 3 })}
                                 required type="text" placeholder="prénom"/>
                            </Col>
                        </Row>
                    </Form.Group><br></br>
                    <Form.Group controlId="formLastname" >
                        <Row>
                            <Col>
                                <Form.Label>Nom</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control {...register("lastName", { minLength: 3 })}
                                 required type="text" placeholder="nom"/>
                            </Col>
                        </Row>
                    </Form.Group><br></br>
                    <Form.Group controlId="formVille" >
                        <Row>
                            <Col>
                                <Form.Label>Ville</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control {...register("ville", {minLength: 3 })}
                                 required type="text" placeholder="ville"/>
                            </Col>
                        </Row>
                    </Form.Group><br></br>
                    <Form.Group controlId="formEmail" >
                        <Row>
                            <Col>
                                <Form.Label>Email</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control {...register("email")}
                                required type="email" placeholder="exemple@mail.com"/>
                            </Col>
                        </Row>
                    </Form.Group><br></br>
                    <Form.Group controlId="formPassword" >
                        <Row>
                            <Col>
                                <Form.Label>Mot de passe</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control {...register("password", { required: true, minLength:5 })}
                                 type="password" placeholder="*********"/>
                                {errors.password && <small style={{"color":"red"}}>
                                    Mot de passe trop court!!</small>}
                            </Col>
                        </Row>
                    </Form.Group>
                </Container>
                <div className="text-center"><br></br>
                    <input type="checkbox" name="conditions" required/>
                    &nbsp;
                    <label>J'accepte <a href="conditions" style={{"text-decoration":"underline"}}>
                        les conditions générales</a> d'utilisation.</label><br></br><br></br>
                    <input type="checkbox" name="newsletter"/>
                    &nbsp;
                    <label>J'aimerais reçevoir des notifications par email</label><br></br><br></br>
                    <Button variant="info" type="submit">S'inscrire</Button><br></br><br></br>
                    <label>Vous avez un compte? <a href="login" style={{"text-decoration":"underline"}}>
                        Se connecter</a></label><br></br>
                </div>
            </Form>
        </Card>
        </div>
     );
}

export default Signup;