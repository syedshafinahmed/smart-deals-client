import React from 'react';
import { Link } from 'react-router';

const Product = ({ product }) => {
  const { title, price_min, price_max, image } = product;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-full h-60 object-cover skeleton" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: {price_max} - {price_min} BDT</p>
        <div className="card-actions">
          <Link className="w-full" to={`/productdetails/${product._id}`}><button className="btn btn-primary w-full">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Product;