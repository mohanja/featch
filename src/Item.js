import React, { useEffect, useState } from "react";

const Item = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/photos/?albumId=1"
  const [data, setData] = useState([])
  // albumId
  // id
  // thumbnailUrl
  // title
  // url

  // const apiData=()=>{
  //   fetch("https://jsonplaceholder.typicode.com/photos/?albumId=1",{
  //     method:"GET"
  //   })
  // .then(res=>res.json())
  // .then(data=>setData(data))}

  useEffect(() => {
    const result = async () => {
      try {

        const res = await fetch(API_URL)
        const list = await res.json()
        setData(list)

      } catch (err) {
        console.log(err.stack)
      }

    }

    (async () => await result())()
  }, [])

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="container ">
        <div className="row">

          {data.map((res) =>
            <div className="col-8 col-sm-4">
              <div className="card" key={res.id} style={{ width: "18rem", margin: "20px" }}>
                <img src={res.url} alt="..." />
                <div className="card-body">
                  <p className="card-text">{res.title}</p>
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