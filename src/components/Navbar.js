import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";


const Navbar = (props) => {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src="./images/Myntra-logo.png" style={{width: "60px"}} alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">MEN</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">WOMEN</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">WATCHES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">CLOTHING</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">FOOTWEAR</a>
                    </li>
                </ul>
                <div className="d-flex">
                    <input className="form-control search ml-5" type="search" 
                    placeholder="Search for products,brands and more" aria-label="Search" onChange={props.onChange}/>
                </div>
                <div>
                    <div className="profilelogo"><i className="fa fa-user" aria-hidden="true"></i></div>
                    <span className="profilename">Profile</span>
                </div>
                <div>
                    <div className="wishlistlogo"><i className="fa fa-heart" aria-hidden="true"></i></div>
                    <span className="wishlistname">Wishlist</span>
                </div>
                <div>
                    <div className="baglogo"><i className="fa fa-shopping-bag" aria-hidden="true"></i></div>
                    <span className="bagname">Cart</span>
                </div>
            </div>
        </div>  
    </nav>
    </>
  );
};

export default Navbar;
