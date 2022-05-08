import React from "react";
import { Link } from "react-router-dom";
import Products from "../Products/Products/Products";

const Home = () => {
  return (
    <div>
      <Products></Products>
      {/* <Link>Manage Inventory</Link> */}
      <Link to="/manageinventory">
        <button className="btn btn-primary w-50">Manage Inventoy</button>
      </Link>
    </div>
  );
};

export default Home;
