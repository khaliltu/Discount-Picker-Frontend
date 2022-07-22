import {Card, Form, Button} from 'react-bootstrap';
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import React , {useState} from 'react';
import axios from "axios";
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
            console.log(JSON.parse(localStorage.getItem('token')))
            navigate('/')
         })
         .catch(err => { 
            try {
                console.log("here")
                setMessage(err.response.data.message)
            }
            catch{
                setMessage("Erreur de connection au serveur")
            }
        });
     };

    return (
    <div style={{"padding-top":"30px","padding-bottom":"20px"}}>
        <Card  style={{"margin":"auto","margin-bottom":"20px","width":"35%","min-width":"400px","padding":"20px 50px 20px 50px "}}>
            <img style={{"margin":"auto","width":"200px"}} alt='logo' src={process.env.PUBLIC_URL+"DP.png"}/>
            <br></br>
            {message && <p className="text-center alert alert-warning" style={{"color":"red"}}>
                {message} </p>}
            <h2 className='text-center'>Se connecter</h2>
            <br></br>
            <Form style={{"margin":"10px 40px 10px 40px"}} onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId='formEmail'>
                    <Form.Control {...register("email")}
                                 required type='email' placeholder='exemple@email.com'></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group controlId='formPassword'>
                    <Form.Control {...register("password", {minLength: 5 })}
                                 required type='password' placeholder='***********'></Form.Control>
                    {errors.password && <small style={{"color":"red"}}>
                                    Mot trop court!!</small>}
                </Form.Group>
                <br></br>
                <div className='text-center'>
                    <input type="checkbox" id="inbrowser"/>
                    &nbsp;
                    <label>Se souvenir de moi</label><br></br><br></br>
                    <Button type="submit" variant="info">Se connecter</Button><br></br><br></br>
                </div>

            </Form>

        </Card>
        </div>
     );
}
 
export default Login;