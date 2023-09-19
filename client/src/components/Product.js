import React from "react";
import Rateing from "./Rateing";
import { Link } from "react-router-dom";
function Product(props) {
  const { product } = props;
  return (
    <div className="card">
      <Link to={`/product/${product._id}`}>
        {/* image size: 680px by 830px */}
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rateing
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rateing>
        <div className="price">Rs.{product.price}</div>
      </div>
    </div>
  );
}

export default Product;
