import React, { useState, useEffect } from "react";

function Home() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://bombshell.herokuapp.com/makeup")
    .then(response => response.json())
    .then((data) => {
      setItems(data)
    })
  }, [])

  return (
    <div className="overall home-page">
        <h1>The Home Page</h1>
      <div className="all-data">
        {items.map((makeup) => (
          <div className="single-fetch" key={makeup.id}>
            <div className="paragraghs">
              <h3><span className="name-span">Name: </span><span>{makeup.name}</span></h3> 
              <h3><span className="name-span">Product type: </span><span>{makeup.product_type}</span></h3>
            </div>
            <div className="fetched-images">
              <img src={makeup.image_link} alt='invalid_url'/>
            </div>
            <h3 className="descr">Description:</h3>
            <p>{makeup.description}</p>
          </div>
        ))}
      </div>
    </div>
  )

}

export default Home;