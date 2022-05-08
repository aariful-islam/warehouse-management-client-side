import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ManageInventory = () => {
    const {inventoryId} =useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/product")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/product/${inventoryId}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                   if(data.deleteCount>0){
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);

                   }
                   
                })
        }
    }
    return (
        <div className='manage-section'>
        <h2 className='manage-title'>Manage Laptops</h2>
        <Table Table striped bordered hover>
            <thead>
                <tr>
                    <th className='text-center'>Name</th>
                    <th className='text-center'>Supplier</th>
                    <th className='text-center'>Price</th>
                    <th className='text-center'>Quantity</th>
                    <th className='text-center'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product =>
                        <tr key={product._id}>
                            <td className='text-center'>{product.name}</td>
                            <td className='text-center'>{product.Supplier}</td>
                            <td className='text-center'>{product.price}</td>
                            <td className='text-center'>{product.quantity}</td>
                            <td className='text-center'><button onClick={() => handleDelete(product._id)} className='delete-btn' >Delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
        
    </div >
);
};


export default ManageInventory;