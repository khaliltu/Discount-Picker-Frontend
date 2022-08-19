import React, { useEffect, useState }  from 'react';
import {FaArrowDown, FaArrowUp} from 'react-icons/fa'
import { Card } from "react-bootstrap";
import './styles/promos.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Promos = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState(' ')
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(10000)
    const [descendent, setDescendent] = useState(false)
    const token = localStorage.getItem('token')
    useEffect(()=> {
        try {
            const fetchData = async () =>{
            try {
            const result = await  axios.get('http://127.0.0.1:5000/api/v1/products',
                                            { headers : { 'Content-Type': 'application/json',
                                            'token' : token.replace(/['"]+/g, '')}});
            sessionStorage.setItem("products",JSON.stringify(result.data.products.sort( () => Math.random() - 0.5)));
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

      const initialize = () => {
        setMax(10000);
        setMin(0);
        setSearch(' ')
      }
      const updateMax = (event) => {
        let targetValue = event.target.value
        if (targetValue) { setMax(targetValue) }
        else { setMax(10000) }
      }
      const capitalize = (word) => {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
      }
      const updateSort = () => {
        setDescendent(!descendent)
      }
    return (
        <div>
            <div >
            <form className='flexRow' style={{justifyContent:"space-between",backgroundColor:"white",minHeight:"75px",padding:"20px 60px 20px 100px"}}>
                <div className='filterItem'>
                        <label>Recherche</label> &nbsp;
                        <input onChange={(e)=>setSearch(e.target.value)} name="search" type="text"></input>&nbsp;&nbsp;
               </div>
               <div className='flexRow'>
                        <div className='filterItem'><label>Prix min</label> &nbsp;
                        <input onChange={(e)=>setMin(e.target.value)} type="number" name="min"  min={0} max={10000}></input></div> &nbsp;
                        <div className='filterItem'><label>Prix max</label> &nbsp;
                        <input onChange={updateMax} type="number" name="max"  min={1} max={10000}></input></div>&nbsp;&nbsp;&nbsp;&nbsp;
                        {!descendent && <button style={{maxWidth:"120px","border":"skyblue 3px solid",marginBottom:'10px'}} onClick={updateSort} ><b>PRIX&nbsp; <FaArrowDown/></b></button>}
                        {descendent && <button style={{maxWidth:"120px","border":"skyblue 3px solid",marginBottom:"10px"}} onClick={updateSort} ><b>PRIX&nbsp; <FaArrowUp/></b></button>}
                </div>
                <div className='flexRow'>
                    <button onClick={initialize} style={{backgroundColor:"indianred",borderBottom:"indianred 1px solid",color:"white"}}>Réinstaliser</button>
                </div>
            </form>
            </div>
            <div className='promos' style={{display:"flex",flexFlow:"row wrap"}}>
                {JSON.parse(sessionStorage.getItem("products")) && JSON.parse(sessionStorage.getItem("products"))
                                    .filter(product => ((product.name.includes(search) || product.name.includes(capitalize(search)) || product.name.includes(search.toUpperCase())) 
                                    && product.price >= min
                                    && product.price <= max)).sort(function(a,b) {if (descendent) { return b.price-a.price}
                                    else { return a.price-b.price}}).map((product)=> ( <div key={product["Image Link"]} className='promoCard' style={{minWidth:"220px"}}>
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
        </div>
     );
}
 
export default Promos;