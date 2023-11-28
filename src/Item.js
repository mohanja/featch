import React, { useEffect, useState } from "react";

const Item=()=>{

    const[data,setData]=useState([])
    // albumId
    // id
    // thumbnailUrl
    // title
    // url
    
    const apiData=()=>{
      fetch("https://jsonplaceholder.typicode.com/photos/?albumId=1",{
        method:"GET"
      })
    .then(res=>res.json())
    .then(data=>setData(data))}
    
    useEffect(()=>apiData(),[])
    
        return(
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div className="container ">
          <div className="row">
      
             {data.map((res)=>
                 <div className="col-8 col-sm-4">
        <div className="card" style={{width: "18rem",margin:"20px"}}>
  <img src={res.url}  alt="..."/>
  <div class="card-body">
    <p class="card-text">{res.title}</p>
    <a href="#" class="btn btn-primary">Oreder</a>
  </div>
</div>
    
         </div>
    
             )}
          </div>
     </div>
            </div>
        )
    }
export default Item