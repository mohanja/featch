import React from "react";
import './Home.css'
import logo from './pint.png'

const Home=()=>{
    return(
        <>
        <div id="home">
           <div className="main-box">
            <div className="img-cont">
                <div className="title">Colors</div>
                <p>Japan is an island country in East Asia. It is in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan, extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south.</p>
            </div>
            <div className="img-box">
                <img src={logo}/>
            </div>
           </div>
        </div>
        </>
    )
}

export default Home