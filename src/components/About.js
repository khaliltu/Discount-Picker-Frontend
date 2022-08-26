import React  from 'react';
import { Card } from 'react-bootstrap';
const About = () => {
    return ( 
        <div className="bodyPage">
        <Card className="loginCard">
            <h1 className="text-center">Discount Picker</h1>
            <img className='loginImg' alt='logo' src={process.env.PUBLIC_URL+"DP.png"}/><br></br><br></br>
            <p className='text-center'>Discount Picker est une application web qui fait la collecte des meilleures promotions sur les sites e-commerce
                Tunisiens sur une même plateforme pour offrir à l'utilisateur une vision claire concernant les prix des produits
                mis en vente en ligne.
            </p><br></br>
            <p className='text-center'>Ce site web présente le sujet d'un stage d'été durant deux mois au sein de &nbsp;
                <a href='https://www.freedomofdev.com/' target='_blank' rel="noopener noreferrer">Freedom of Dev Services</a> élaboré par &nbsp;
                <a href='https://www.linkedin.com/in/khalilturki9/' target='_blank' rel="noopener noreferrer">Khalil Turki</a> et encadré par Ahmed Rekik, ingénieur et
                encadrant Technique</p><br></br>
                <p className='text-center'>© 2022 Copyrights</p>
        </Card>
        </div>
     );
}
 
export default About;