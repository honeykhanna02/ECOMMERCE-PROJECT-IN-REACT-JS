import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Products = (props) => {
  return (
    <>
    <div className="cards">
    <div className="card" style={{width: "235px"}}>
        <img
          src={props.img}
          className="card-img-top"
          alt="mypic"/>
        <div className="card-body">
          <h6 className="card-title">
            {props.product}
          </h6>
          <p className="card-text"><b>{props.brand}</b>
            <div className="size">{props.sizes}</div>
            <span className="price">Rs.{props.price}</span>
            <span className="mrp">Rs.{props.mrp}</span>
            <span className="discount">{props.dis}</span>
          </p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>

    </>
  );
};

export default Products;