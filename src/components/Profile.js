import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import './styles/Login_Signup.css';
import './styles/profile.css';
import {useForm} from "react-hook-form";
import axios from 'axios';
const Profile = () => {
    const [update, setUpdate] = useState();
    const [message, setMessage] = useState();
    const { register, handleSubmit} = useForm();
    const user = JSON.parse(localStorage.getItem("user"))
    const onSubmit = () => {
        localStorage.setItem("user",JSON.stringify(user))
        console.log(user)
        axios
        .put('http://127.0.0.1:5000/api/v1/user',
        user,
        { headers : { 'Content-Type': 'application/json',
        'token' : localStorage.getItem("token").replace(/['"]+/g, '')}}
        ).then( response => {
            setUpdate(true)
        }).catch(err => {
            setUpdate(false)
            try{
                setMessage(err.response.data.message)
            }
            catch {
                setMessage("Erreur de connection au serveur")
            }
        })
    }
    const setValue = event => {
        event.target.value=event.target.placeholder
    }
    const updateValue = event => {
        var field = event.target.name
        user[field]= event.target.value
    }
    return ( 
    <div>
        {update && <p className="text-center alert alert-success alertGreen">
                        Modification réussite!</p>}
            {!update && message && <p className="text-center alert alertRed alert-warning">
                {message} </p>}
    <div className="bodyPage profile">
        <Card className="profileCard">
            <br></br>
            <h3 className="text-center">Informations Générales</h3><br></br><br></br>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Label>Prénom</Form.Label>
                <Form.Control {...register("name", {minLength: 3 })}
                    required type="text" placeholder={user.name} onClick={setValue} onChange={updateValue}/>
                <br></br>
                <Form.Label>Nom</Form.Label>
                <Form.Control {...register("lastName", {minLength: 3 })}
                    required type="text" placeholder={user.lastName} onClick={setValue} onChange={updateValue}/>
                <br></br>
                <Form.Label>Ville</Form.Label>
                <Form.Control {...register("ville", {minLength: 3 })}
                    required type="text" placeholder={user.ville} onClick={setValue} onChange={updateValue}/>
                <br></br>
                <div className="text-center">
                    <Button variant="info" type="submit">Modifier</Button><br></br><br></br>
                </div>
            </Form>
        </Card>
        <Card className="profileCard">
            <br></br>
            <h3 className="text-center">Sécurité</h3><br></br><br></br>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Label>email</Form.Label>
                <Form.Control {...register("email", {minLength: 3 })}
                    required type="email" placeholder={user.email} onClick={setValue} onChange={updateValue}/>
                <br></br>
                <Form.Label>Nouveau mot de passe</Form.Label>
                <Form.Control {...register("newPassword", {minLength: 5 }) }
                    type="password" placeholder="*****" onChange={updateValue}/>
                <br></br>
                <Form.Label>Ancien mot de passe</Form.Label>
                <Form.Control {...register("password", {minLength: 5 })}
                    required type="password" placeholder="*****" onChange={updateValue}/>
                <br></br>
                <div className="text-center">
                    <Button variant="info" type="submit">Modifier</Button><br></br><br></br>
                </div>
            </Form>
        </Card>
    </div>
    </div> );
}
 
export default Profile;