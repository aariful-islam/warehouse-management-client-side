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
  }, []);

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
        <button className="btn btn-primary w-50">delivered</button>
      </div>
      <Link to="/manageinventory">
        <button className="btn btn-primary w-50">Manage Inventoy</button>
      </Link>
    </div>
  );
};

export default Inventory;
