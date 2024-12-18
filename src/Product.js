import React from "react";
import "./product.css";

function Product({ product, children }) {
  return (
    <div className={`product-card ${!product.image_url ? "no-image" : ""}`}>
      {product.image_url ? (
        <img src={product.image_url} alt={product.name} />
      ) : null}
      <div className="product-card-content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <span>{children}</span>
      </div>
    </div>
  );
}

export default Product;
