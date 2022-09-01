import { useParams } from "react-router-dom";
import React, { useState, useEffect }  from 'react';
import axios from "axios";
import {  Card } from "react-bootstrap";
import { ScaleLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import "../styles/products.css"
const Products = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([]);
    const navigate = useNavigate()
    const {id} = useParams();
    useEffect(()=> {
        console.log(id)
        try {
        const fetchData = async () =>{
            try {
          const result = await  axios.get('http://127.0.0.1:5000/api/v1/product',
                                            { headers : { 'Content-Type': 'application/json','id' : id,     
                                            'token' : localStorage.getItem("token").replace(/['"]+/g, '')}});
          setProduct(result.data);
          console.log(product)
          setLoading(false)
        }
        catch {
            navigate('../login')
        }
        };   
        fetchData(); 
      } catch(error) {
          console.error(error.message);
       }
        
      },[]);
    return ( 
        <div>
           {loading &&
                 <Card style={{minHeight:"400px"}} className="cardElementProduct"><ScaleLoader color="red" style={{margin:"auto"}}/></Card>
            }
            {!loading && <div className="bodyPageProduct">
            <Card className="cardElementProduct">
            <div className="flexRow">
                <div>
                    <img className="imgProduct" src={product["Image Link"]} alt="produit"/>
                </div>
                <div className="text-center">
                    <div>
                        <h4 style={{margin:"auto"}} className="website">{product.website}</h4><br></br>
                        <div className="infos">
                            <h4>{product.name}</h4><br></br>
                            <b className="price">{product.price} TND</b><br></br><br></br>
                            <small><strike className="old-price">{product["Initial Price"]} TND</strike></small><br></br><br></br>
                            {product["Discount Percentage"] && <small>Remise: {product["Discount Percentage"]} %</small>}
                            {product["Discount Amount"] && <small>Réduction: {product["Discount Amount"]} TND</small>}
                            <br></br>
                        </div>
                    </div>
                    <br></br>
                    <div className="achetez">
                        <a style={{width: "100%"}} href={product["Product link"]} target='_blank' rel="noopener noreferrer" class="btn">Achetez sur {product.website}</a>
                    </div>
                </div>
            </div>
            <hr></hr>
            {product["details"] && product["key value details"] && <div className="description">
                <b>Details</b>
                <div className="flexRow">
                    <div>
                        {product["details"] && <ul>{product["details"].map((detail)=> (<li>{detail}</li>))}</ul>}
                    </div>
                    <div>
                        {product["key value details"] && <ul>{product["key value details"].map((detail)=> (<li>{detail}</li>))}</ul>}
                    </div>
                </div>
            </div>}
            </Card>
        </div> } </div>
    );
}
 
export default Products;