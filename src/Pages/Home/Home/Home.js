import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Products from "../Products/Products/Products";
import banner1 from "../../../images/bannerLaptop.jpg";
import laptop from "../../../images/laptop-with-blank-black-screen-white-table.jpg";

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
      


        <div className="row m-5">
        <h1>Get the Authentic product</h1>
        <div className="col-lg-7 col-md-7-col-sm-12 ">
        
        <h3 className="mt-5">
            
            Get the best and authentic laptop from us. We suplly the best
            product all over bangladesh. we import our product from dubai. We
            maintain this warehouse since many years. Meet with us and get the best laptop.
          </h3>
          
          
        </div>
        <div className="col-lg-5 col-md-7-col-sm-12 d-flex justify-content-center">
          <img className="img-fluid" src={laptop} alt="" />
        </div>
      </div>
        
      {/* <Link>Manage Inventory</Link> */}
      <Link to="/manageinventory">
        <button className="btn btn-primary w-50 m-5">Manage Inventoy</button>
      </Link>
    </div>
  );
};

export default Home;
