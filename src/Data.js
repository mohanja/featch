import React, { useEffect, useState } from "react";
import './data.css'
const Data=()=>{

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

console.log(data)
useEffect(()=>apiData(),[])

    return(
        <>
      <div className="container text-center">
      <div className="row">
  
         {data.map((res)=>
             <div className="col-6 col-sm-3">
          <img  src={res.thumbnailUrl}/>

     </div>

         )}
      </div>
 

 </div>

        </>
    )
}

export default Data