import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer font-small blue pt-4 text-white bg-dark" >
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Laptop Warehouse</h5>
              <p>
                Get the best and authentic laptop from us. We suplly the best product all over bangladesh. we import our product from dubai.
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="www.facebook.com">Facebook</a>
                </li>
                <li>
                  <a href="www.youtube.com">YouTube</a>
                </li>
                <li>
                  <a href="www.linkedIn.com">LinkedIN</a>
                </li>
                
              </ul>
            </div>

            
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2022 Copyright
         
        </div>
      </footer>
    </div>
  );
};

export default Footer;
