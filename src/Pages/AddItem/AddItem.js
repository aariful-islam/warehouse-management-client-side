import React from "react";
import { useForm } from "react-hook-form";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddItem = () => {
  const {
    register,
    handleSubmit,
  
  
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url = "https://hidden-fortress-18672.herokuapp.com/product";
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(result =>{
        console.log(result);
        toast("Laptop Added");
    } )
};
  return (
    <div className="w-50 mx-auto m-5">
      <h2>Please add new Laptop</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2"
          placeholder="Email"
          {...register("email", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Supplier"
          type="text"
          {...register("Supplier")}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input className="btn btn-primary" type="submit" value="Add Laptop" />
      </form>
    </div>
  );
};

export default AddItem;
