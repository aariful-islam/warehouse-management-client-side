import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Products from "../Products/Products/Products";
import banner1 from "../../../images/bannerLaptop.jpg";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="Second slide" />

          <Carousel.Caption
            className="carousel-caption d-flex flex-column justify-content-center h-100"
            style={{ top: "0" }}
          >
            <h1 className="">
              <span className="text-primary">Welcome to laptop warehouse</span>
            </h1>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Products></Products>
      {/* <Link>Manage Inventory</Link> */}
      <Link to="/manageinventory">
        <button className="btn btn-primary w-50 m-5">Manage Inventoy</button>
      </Link>
    </div>
  );
};

export default Home;
