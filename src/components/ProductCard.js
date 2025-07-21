import React from 'react';

function ProductCard({ title, price, image }) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card mb-4 shadow-sm border-0">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          <h5 className="card-title fw-semibold">{title}</h5>
          <p className="card-text text-success fw-bold">₹{price}</p>
          <button className="btn btn-outline-primary w-100">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
