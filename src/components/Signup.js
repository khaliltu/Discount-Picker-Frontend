import {Form, Card, Container, Row, Col,Button} from "react-bootstrap";
import React, { useState }  from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import "../styles/Login_Signup.css"
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
            document.getElementById("signupForm").reset();
         })
         .catch(err => { 
            setSignup(false)
            try{
                setMessage(err.response.data.message)
            }
            catch {
                setMessage("Erreur de connection au serveur")
            }
        });
     };



    return ( 
    <div className="bodyPage">
        <Card className="loginCard">
            <h3 className="text-center">Bienvenue à Discount Picker</h3>
            {signup && <p className="text-center alert alert-success alertGreen">
                        Inscription réussite! <a href="login">
                        Se connecter</a> </p>}
            {!signup && message && <p className="text-center alert alertRed alert-warning">
                {message} </p>}
            <br></br>
            <Form id="signupForm" onSubmit={handleSubmit(onSubmit)}>
                <Container>
                <Form.Group>
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
                    <Form.Group>
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
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Genre</Form.Label>
                            </Col>
                            <Col>
                                <Form.Select required {...register("sex")}>
                                    <option value="male">homme</option>
                                    <option value="female">femme</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </Form.Group> <br></br>
                    <Form.Group>
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
                    <Form.Group>
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
                    <Form.Group>
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
                    <label>J'accepte <a href="conditions">
                        les conditions générales</a> d'utilisation.</label><br></br><br></br>
                    <Button variant="info" type="submit">S'inscrire</Button><br></br><br></br>
                    <label>Vous avez un compte? &nbsp;<a href="login">
                        Se connecter</a></label><br></br>
                </div>
            </Form>
        </Card>
        </div>
     );
}

export default Signup;