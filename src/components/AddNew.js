import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function Addnew() {
    const [name, setName] = useState('')
    const [product_type, setBrand] = useState('')
    const [image_link, setImage] = useState('')
    const [description, setDescription] = useState('')
    const history = useHistory();

    function handleSbmit(e) {
      e.preventDefault();
      const items = {name, product_type, image_link, description}
      fetch("https://bombshell.herokuapp.com/makeup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(items)
        })
        .then(() => {
          history.push('/')
        })
    }

  return (
    <div className="overall addnew">
        <h1>Add New Item</h1>
        <form className="new-form" onSubmit={handleSbmit}>
            <div>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <input type="text" placeholder="Product_type" value={product_type} onChange={(e) => setBrand(e.target.value)}/>
            </div>
            <div>
                <input type="text" placeholder="Image_url" value={image_link} onChange={(e) => setImage(e.target.value)}/>
            </div>
            <div>
                <textarea type="text" placeholder="Add descriptions" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div>
                <input type="submit" className="add-btn" value="Add New Product" />
            </div>
        </form>
    </div>
  )

}

export default Addnew;