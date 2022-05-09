import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const { inventoryId } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/product/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);
  

  const handleUpdateQuantity = event =>{
    event.preventDefault();
    const previousQuantity = product.quantity;
    console.log(previousQuantity);
    const quantity = event.target.quantity.value;
    const total = parseInt(quantity)+ parseInt(previousQuantity)
    
   

    const updatedQuantity = {total};

    // send data to the server
    const url = `http://localhost:5000/product/${inventoryId}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedQuantity)
    })
    .then(res => res.json())
    .then(data =>{
        console.log('success', data);
        alert('users prodvct successfully!!!');
        event.target.reset();
    })
}


const handleDelibered = () => {

    
   
    const total = product.quantity - 1;
        const updatedQuantity = { total };
        console.log(total,updatedQuantity)


    // send data to the server
    const url = `http://localhost:5000/product/${inventoryId}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedQuantity)
    })
    .then(res => res.json())
    .then(data =>{
        // console.log('success', data);
        // alert('users added successfully!!!');
     
        product.quantity = total;
            console.log('before',product);
            setProduct(product);
       
    })
}



  return (
    <div>
      <div className="service container shadow-lg p-3 mb-5 bg-white rounded w-50">
        <img className="w-100" src={product.img} alt="" />
        <h2>{product.name}</h2>
        <h3>Price: {product.price}</h3>
        <p>
          <small>{product.description}</small>
        </p>
        <p> quantity :{product.quantity}</p>
        
        <button className="btn btn-primary w-50" onClick={handleDelibered}>delivered</button>
      </div>
      <Link to="/manageinventory" className="mb-4">
        <button className="btn btn-primary w-50" >Manage Inventoy</button>
      </Link>




      <form onSubmit={handleUpdateQuantity}>
                <input type="text" name="quantity" placeholder='Quantity' required />
                <br />
               
                <input type="submit"  value="Update Quantity" />
            </form>
    </div>
  );
};

export default Inventory;
