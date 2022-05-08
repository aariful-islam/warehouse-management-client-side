import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/product")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
        <div className='manage-section'>
        <h2 className='manage-title'>Manage Furnitures</h2>
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
                            <td className='text-center'><button className='delete-btn' >Delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
        
    </div >
);
};


export default ManageInventory;