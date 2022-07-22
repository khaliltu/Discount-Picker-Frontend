import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
//import Header from "./components/Header";
import HeaderLoggedIn from "./components/HeaderLoggedIn";
import Promos from "./components/Promos";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Signup from "./components/Signup";
import Login from "./components/Login";
import React  from 'react';
function App() {
  return (
    <div className="App">
        <HeaderLoggedIn/>
        
        <div className="bg-light">
        <main>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/promos" exact element={<Promos/>}/>
          <Route path="/about" exact element= {<About/>}/>
          <Route path="/signup" exact element= {<Signup/>}/>
          <Route path="/login" exact element= {<Login/>}/>
        </Routes>
        </main>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
