import React, { useEffect, useState } from "react";
import './data.css'
const Data = () => {

  const [data, setData] = useState([])
  // albumId
  // id
  // thumbnailUrl
  // title
  // url

  const API_URL = "https://jsonplaceholder.typicode.com/photos/?albumId=1"

  // const apiData=()=>{
  //   fetch("https://jsonplaceholder.typicode.com/photos/?albumId=1",{
  //     method:"GET"
  //   })
  // .then(res=>res.json())
  // .then(data=>setData(data))}

  // console.log(data)
  useEffect(() => {
    const result= async () => {
      try {
        const res = await fetch(API_URL)
        console.log(res)
        const list= await res.json()
        setData(list)
      } catch (err) {
        console.log(err.stack)
      }
    }

    (async () => await result())()
  }, [])

  return (
    <>
      <div className="container text-center">
        <div className="row">

          {data.map((res) =>
            <div className="col-6 col-sm-3">
              <img key={res.id} src={res.thumbnailUrl} />

            </div>

          )}
        </div>


      </div>

    </>
  )
}

export default Data