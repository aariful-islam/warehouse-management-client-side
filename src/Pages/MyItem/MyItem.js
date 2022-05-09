import React, { useEffect, useState } from 'react';
import axios from 'axios'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyItem = () => {
    const [products,setProducts]= useState([]);
    const [user] = useAuthState(auth);
    
    useEffect( ()=>{
        const getProducts=async()=>{
            const email=user.email;
            console.log(email)
            const url =`https://hidden-fortress-18672.herokuapp.com/product?email=${email}`;
            const {data} = await axios.get(url);
            setProducts(data)
            
        }
        getProducts();
    },[user])
    return (
        <div>
            <h1>{products.length}</h1>
        </div>
    );
};

export default MyItem;