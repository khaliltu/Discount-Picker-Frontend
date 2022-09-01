import React, { useEffect, useState }  from 'react';
import {FaSearch} from 'react-icons/fa'
import { Card } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/promos.css"
const Promos = () => {
    const navigate = useNavigate()
    const [filter, setFilter]= useState(false)
    const [search, setSearch] = useState('')
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(10000)
    const [descendent, setDescendent] = useState(false)
    const [recommandedProducts, setRecommandedProducts] = useState([])
    const token = localStorage.getItem('token')
    useEffect(()=> {
        try {
            const fetchData = async () =>{
            try {
            const result = await  axios.get('http://127.0.0.1:5000/api/v1/products',
                                            { headers : { 'Content-Type': 'application/json',
                                            'token' : token.replace(/['"]+/g, '')}});
            sessionStorage.setItem("products",JSON.stringify(result.data.products));
            setRecommandedProducts(result.data.recommandedProducts);
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
        setFilter(false)
      }
      const updateMax = (event) => {
        let targetValue = event.target.value
        if (targetValue) { setMax(targetValue) }
        else { setMax(10000) }
        setFilter(true)
      }
      const updateMin = (event) => {
        setMin(event.target.value)
        setFilter(true)
      }
      const updateSearch = (event) => {
        setSearch(event.target.value)
        setFilter(true)
      }
      const capitalize = (word) => {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
      }
      const updateSort = (event) => {
        let v = event.target.value
        if (v ==="0"){
            setDescendent(false)
        }
        else {
            setDescendent(true)
        }
      }
    return (
        <div>
            <div >
                <form className='flexRow' style={{justifyContent:"space-between",backgroundColor:"white",minHeight:"75px",padding:"20px 60px 20px 100px"}}>
                    <div className='filterItem'>
                            <label><b>Recherche</b></label> &nbsp;
                            <input onChange={updateSearch} name="search" type="text"></input>&nbsp;&nbsp;
                            <FaSearch/>
                </div>

                <div className='flexRow'>
                            <div className='filterItem'><label><b>Prix min</b></label> &nbsp;
                            <input onChange={updateMin} type="number" name="min"  min={0} max={10000}></input></div> &nbsp;
                            <div className='filterItem'><label><b>Prix max</b></label> &nbsp;
                            <input onChange={updateMax} type="number" name="max"  min={1} max={10000}></input></div>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>

                    <div className='filterItem'>
                            <label><b>Trier par: &nbsp;</b></label>
                            <select style={{height:"40px"}} onChange={updateSort}>
                                <option value="0">Prix Croissant </option>
                                <option value="1">Prix Décroissant</option>
                            </select> &nbsp;
                    </div>

                    <div className='flexRow'>
                        <button onClick={initialize} style={{backgroundColor:"indianred",borderBottom:"indianred 1px solid",color:"white"}}>Réinstaliser</button>
                    </div>
                </form>
            </div>
            {!filter  && <div><h2 style={{margin:'20px 0px 0px 60px'}}><b>Recommandé pour vous!</b></h2>
            <hr></hr>
            <div className='promos' style={{display:"flex",flexFlow:"row wrap"}}>
                {recommandedProducts && recommandedProducts.sort(function(a,b) {if (descendent) { return b.price-a.price}
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
            </div> </div>}
            {!filter && <div><h2 style={{margin:'20px 0px 0px 60px'}}><b>Tout les produits</b></h2>
            <hr></hr></div>}
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