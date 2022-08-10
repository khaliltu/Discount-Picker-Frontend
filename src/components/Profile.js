import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import './styles/Login_Signup.css';
import './styles/profile.css';
import {useForm} from "react-hook-form";
import axios from 'axios';
const Profile = () => {
    const [confirmPassword, setConfirmPassword] = useState (true)
    const [security , setSecurity] = useState(false)
    const [update, setUpdate] = useState();
    const [message, setMessage] = useState();
    const { register, handleSubmit} = useForm();
    const user = JSON.parse(localStorage.getItem("user"))
    const onSubmitG = () => {
        axios
        .put('http://127.0.0.1:5000/api/v1/user',
        user,
        { headers : { 'Content-Type': 'application/json',
        'token' : localStorage.getItem("token").replace(/['"]+/g, '')}}
        ).then( () => {
            setUpdate(true)
            localStorage.setItem("user",JSON.stringify(user))
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
    const onSubmitS = () => {
        if (user["newPasswordConfirm"]!==user["newPassword"]){
            setConfirmPassword(false)
        }
        else{
            console.log(user)
            setConfirmPassword(true);
            axios
            .put('http://127.0.0.1:5000/api/v1/login',
            user,
            { headers : { 'Content-Type': 'application/json',
            'token' : localStorage.getItem("token").replace(/['"]+/g, '')}}
            ).then( () => {
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
    }}
    const setValue = event => {
        event.target.value=event.target.placeholder
    }
    const updateValue = event => {
        var field = event.target.name
        user[field]= event.target.value
    }
    const updateViewG = () => {
        setSecurity(false)
    }
    const updateViewS = () => {
        setSecurity(true)
    }
    return ( 
    <div>
        {update && <p className="text-center alert alert-success alertGreen">
                        Modification réussite!</p>}
            {!update && message && <p className="text-center alert alertRed alert-warning">
                {message} </p>}
    <div className="bodyPage">
        {!security &&
        <Card className="profileCard">
            <div className="buttons">
            <button onClick={updateViewG}>Général</button>
            <button className="vl" onClick={updateViewS}>Sécurité</button>
            </div>
            <div className="cardBody">
            <br></br>
            <h3 className="text-center">Informations Générales</h3><br></br><br></br>
            <Form onSubmit={handleSubmit(onSubmitG)}>
                <Form.Label>Prénom</Form.Label>
                <Form.Control {...register("name", {minLength: 3 })}
                    required type="text" placeholder={user.name} onFocus={setValue} onChange={updateValue}/>
                <br></br>
                <Form.Label>Nom</Form.Label>
                <Form.Control {...register("lastName", {minLength: 3 })}
                    required type="text" placeholder={user.lastName} onFocus={setValue} onChange={updateValue}/>
                <br></br>
                <Form.Label>Ville</Form.Label>
                <Form.Control {...register("ville", {minLength: 3 })}
                    required type="text" placeholder={user.ville} onFocus={setValue} onChange={updateValue}/>
                <br></br>
                <div className="text-center">
                    <Button variant="info" type="submit">Modifier</Button><br></br><br></br>
                </div>
            </Form>
            </div>
        </Card>}
        {security && <Card className="profileCard">
            <div className="buttons">
            <button style={{minWidth:"120px"}} onClick={updateViewG}>Général</button>
            <button style={{minWidth:"120px"}} className="vl" onClick={updateViewS}>Sécurité</button>
            </div>
            <div className="cardBody">
            <br></br>
            <h3 className="text-center">Mot de passe</h3><br></br><br></br>
            <Form onSubmit={handleSubmit(onSubmitS)}>
                <Form.Label>Mot de passe actuel</Form.Label>
                <Form.Control {...register("password", {minLength: 5 })}
                    required type="password" placeholder="*****" onChange={updateValue}/>
                <br></br>
                <Form.Label>Nouveau mot de passe</Form.Label>
                <Form.Control {...register("newPassword", {minLength: 5 }) }
                    required type='password' placeholder="*****" onChange={updateValue}/>
                <br></br>
                <Form.Label>Confirmer le nouveau mot de passe</Form.Label>
                <Form.Control {...register("newPasswordConfirm", {minLength: 5 }) }
                    required type="password" placeholder="*****" onChange={updateValue}/>
                {!confirmPassword && <small className="text-center  alertRed">
                Les deux mots de passe ne sont pas identiques </small>}
                <br></br>
                <div className="text-center">
                    <Button variant="info" type="submit">Modifier</Button><br></br><br></br>
                </div>
                
            </Form>
            </div>
        </Card> }
    </div>
    </div> );
}
 
export default Profile;