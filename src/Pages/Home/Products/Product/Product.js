import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const {name,img,description,price}=product
    // const navigate = useNavigate();

    // const navigateToServiceDetail = () =>{
    //     navigate('/checkout');
    // }
    return (
        <div className='service container shadow-lg p-3 mb-5 bg-white rounded'>
        <img className='w-100' src={img} alt="" />
        <h2>{name}</h2>
        <h3>Price: {price}</h3>
        <p><small>{description}</small></p>
        {/* <button onClick={navigateToServiceDetail} className='btn btn-primary'>Book for {name}</button> */}
        
    </div>
    );
};

export default Product;