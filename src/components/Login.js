import {Card, Form, Button} from 'react-bootstrap';
import React  from 'react';
const Login = () => {
    return (
    <div style={{"padding-top":"30px","padding-bottom":"20px"}}>
        <Card  style={{"margin":"auto","margin-bottom":"20px","width":"35%","min-width":"400px","padding":"20px 50px 20px 50px "}}>
            <img style={{"margin":"auto","width":"200px"}} alt='logo' src={process.env.PUBLIC_URL+"DP.png"}/>
            <br></br>
            <h2 className='text-center'>Se connecter</h2>
            <br></br>
            <Form style={{"margin":"10px 40px 10px 40px"}}>
                <Form.Group controlId='formEmail'>
                    <Form.Control required type='email' placeholder='exemple@email.com'></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group controlId='formPassword'>
                    <Form.Control required type='password' placeholder='***********'></Form.Control>
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