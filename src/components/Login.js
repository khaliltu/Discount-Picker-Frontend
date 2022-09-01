import {Card, Form, Button} from 'react-bootstrap';
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import React , {useState} from 'react';
import axios from "axios";
import "../styles/Login_Signup.css"
const Login = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const navigate=useNavigate();
    const [message, setMessage] = useState()
    const onSubmit = data => {
        axios
         .post(
             'http://127.0.0.1:5000/api/v1/login',
             data,
             { headers: { 'Content-Type': 'application/json' }}
          )
         .then(response => {
            localStorage.setItem('token', JSON.stringify(response.data.token));
            localStorage.setItem('userName', JSON.stringify(response.data.userName));
            navigate('/')
         })
         .catch(err => { 
            try {
                setMessage(err.response.data.message)
            }
            catch{
                setMessage("Erreur de connection au serveur")
            }
        });
     };

    return (
    <div className='bodyPage'>
        <Card className='loginCard'>
            <img className='loginImg' alt='logo' src={process.env.PUBLIC_URL+"DP.png"}/>
            <br></br>
            {message && <p className="text-center alert alertRed alert-warning">
                {message} </p>}
            <h2 className='text-center'>Se connecter</h2>
            <br></br>
            <Form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId='formEmail'>
                    <Form.Control {...register("email")}
                                 required type='email' placeholder='exemple@email.com'></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group controlId='formPassword'>
                    <Form.Control {...register("password", {minLength: 5 })}
                                 required type='password' placeholder='***********'></Form.Control>
                    {errors.password && <small style={{"color":"red"}}>
                                    Mot de passe trop court!!</small>}
                </Form.Group>
                <br></br>
                <div className='text-center'>
                    <input type="checkbox" id="inbrowser"/>
                    &nbsp;
                    <label>Se souvenir de moi</label><br></br><br></br>
                    <Button type="submit" variant="info">Se connecter</Button>
                    <br></br><br></br>
                    <label>Vous n'avez pas de compte? &nbsp;<a href="signup">
                        S'inscrire</a></label><br></br>
                </div>

            </Form>

        </Card>
        </div>
     );
}
 
export default Login;