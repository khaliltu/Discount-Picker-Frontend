import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import HeaderLoggedIn from "./components/HeaderLoggedIn";
import Promos from "./components/Promos";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Signup from "./components/Signup";
import Login from "./components/Login";
import React from 'react';
import Profile from "./components/Profile";
import Products from "./components/Products";
function App() {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  navigate(0)
  if (token){
    return (
      <div className="App">
          <HeaderLoggedIn/>
          <div className="bg-light">
          <main>
          <Routes>
            <Route path="/promos" exact element={<Promos/>}/>
            <Route path="/product" exact element={<Promos/>}/>
            <Route path="/product/:id" exact  element={<Products/>}/>
            <Route path="/about" exact element= {<About/>}/>
            <Route path="/profile" exact element= {<Profile/>}/>
            <Route path="/"  element={<Home/>} />
          </Routes>
          </main>
          </div>
          <Footer/>
      </div>
    );
  }
  return (
    <div className="App">
        <Header/>
        <div className="bg-light">
        <main>
        <Routes>
          <Route path="/promos" exact element={<Promos/>}/>
          <Route path="/product" exact element={<Promos/>}/>
          <Route path="/product/:id" exact  element={<Products/>}/>
          <Route path="/about" exact element= {<About/>}/>
          <Route path="/signup" exact element= {<Signup/>}/>
          <Route path="/login" exact element= {<Login/>}/>
          <Route path="/*" element={<Home/>} />
        </Routes>
        </main>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
