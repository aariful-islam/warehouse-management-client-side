import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const {name,img,description,price,quantity}=product
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
        <p> quantity :{quantity}</p>
        <div className='m-2'>
        <button  className='btn btn-primary w-50  text-center' >update</button>

        </div>
       
        
    </div>
    );
};

export default Product;