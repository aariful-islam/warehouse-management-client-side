import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="w-50 mx-auto">
      <h2>Please add new Laptop</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onsubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
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
          type="number"
          {...register("Supplier")}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input className="btn btn-primary" type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddItem;