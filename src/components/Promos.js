import React, { useState, useEffect }  from 'react';
import { Card } from "react-bootstrap";
import './styles/promos.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Promos = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const token = localStorage.getItem('token')
    useEffect(()=> {
        try {
            const fetchData = async () =>{
            try {
            const result = await  axios.get('http://127.0.0.1:5000/api/v1/products',
                                            { headers : { 'Content-Type': 'application/json',
                                            'token' : token.replace(/['"]+/g, '')}});
            setProducts(result.data.sort( () => Math.random() - 0.5));
        }
        catch {
            navigate('../login')
        }
        };   
        fetchData(); 
      } catch(error) {
          navigate("/signup")
       }
        
      },[]);
    return ( 
        <div className='promos' style={{display:"flex",flexFlow:"row wrap"}}>
            {products.map((product)=> ( <div key={product["Image Link"]} className='promoCard' style={{minWidth:"220px"}}>
                <a href={'/product/'+product._id.$oid}
                 className='clickable'>
                <article>
                <div className='imgContainer'>
                    <img className='prodImg' src={product["Image Link"]} alt={product.name}></img>
                </div>
                <Card.Body>
                    <small>{product.name}</small><br></br>
                    <b className='price'>{product.price} TND</b><br></br>
                    <small><strike className="old-price">{product["Initial Price"]} TND</strike></small><br></br>
                    <div className='foot'>
                        {product["Discount Percentage"] && <small>Remise: {product["Discount Percentage"]} %</small>}
                        {product["Discount Amount"] && <small>Réduction: {product["Discount Amount"]} TND</small>}
                        <b className="fournisseur">{product.website}</b>
                    </div>
                </Card.Body>
            </article></a></div>))}
        </div>
     );
}
 
export default Promos;