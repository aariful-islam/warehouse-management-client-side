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
            maintain this warehouse since many years. Meet with us and get the
            best laptop.
          </h3>
        </div>
        <div className="col-lg-5 col-md-7-col-sm-12 d-flex justify-content-center">
          <img className="img-fluid" src={laptop} alt="" />
        </div>
      </div>

      <div>
        <h1>Our Other Services</h1>
        <p className="m-4">
          Laptop ware house specializes in laptops, and has developed many
          strong relationships in the industry that help us bring you the best
          possible solution to your laptop problems. We are happy to offer
          service and parts to regular consumers, small to medium size
          businesses, as well as major corporations. we can provide service for
          one laptop or multiple laptops On a regular basis. We also offer mass
          distribution of parts to service centers or in-house technology
          departments. whatever your needs entail, we have the capacity to
          fulfill them in a timely and professional manor. Our company
          specialize in computer components (especially laptop components. ) we
          can offer you different kinds of laptop accessories. such as laptop
          motherboard (hp, dell, toshiba, acer, asus, ibm, sony, samsung,
          lenovo. Etc). Lcd panel. Ac adapter. Laptop keyboards. Laptop battery.
          DC jacks. Optical disc driver. Gpu. North bridge chips. South bridge
          chips. Etc. We had established steady business relationship with some
          customers from all around the world. And we have won good comments
          from them. should any of our items be of your interest. Pls let me
          know. We will give you competitive price and reliable service. We are
          looking forward to hearing from you laptop ware house is sister
          concern company of fair deal info tech and electronics corporation
          provide repair and sales under single roof .
        </p>
      </div>

      {/* <Link>Manage Inventory</Link> */}
      <Link to="/manageinventory">
        <button className="btn btn-primary w-50 m-5">Manage Inventoy</button>
      </Link>
    </div>
  );
};

export default Home;
