import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://hidden-fortress-18672.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
    return (
        <div id="services" className="services">
      <h1 className="mt-5 my-0 text-center">My Inventory</h1>

      <div className="services-container my-3">
        {
        products.slice(0,6).map((product) => <Product
            key={product._id}
            product={product}
            >
        </Product>
          
        )}
      </div>
    </div>
    );
};

export default Products;