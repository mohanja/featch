import React, { useState } from "react";
import logo from "./img1.png";
import './Header.css'
import Home from "./Home";
import Data from "./Data";
import Item from "./Item";
import { Link } from "react-router-dom";
import { Routes, Route} from "react-router-dom";

const Header=()=>{

    const[show,setShow]=useState(false)
    return(
        <>
      <header>
        <nav>
   <div className="logo">
    color<img src={logo}/></div>
   <ul className={show?"showmenu":""}>
                <li><Link to="/">home</Link></li>
                <li><Link to="/color">Color</Link></li>
                <li><Link to="/item">ColorItem</Link></li>
             
            </ul>
    <div class="menu" onClick={()=>setShow(!show)}>
        <div class="menu-icon"></div>
        <div class="menu-icon"></div>
        <div class="menu-icon"></div>
    </div>   
        </nav>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/color" element={<Data/>} />
          <Route path="/item" element={<Item/>} />
      </Routes>
      </header>
        </>
    )
}

export default Header