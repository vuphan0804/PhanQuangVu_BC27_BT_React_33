import React from "react";

const ProductItem = ({ product, onSelect, handleOpen }) => {
  const handleSelect = (product) => {
    onSelect(product);
    handleOpen();
  };

  return (
    <div>
      <div className="card text-start">
        <img
          className="card-img-top"
          src={product.image}
          width="100%"
          height="300px"
          alt="Title"
        />
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">{product.price}</p>
          <button className="btn-dark" onClick={() => handleSelect(product)}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
