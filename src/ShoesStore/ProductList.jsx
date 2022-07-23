import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, handleOpen, onSelect }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-lg-4 col-sm-6">
              <ProductItem
                product={product}
                onSelect={onSelect}
                handleOpen={handleOpen}
              ></ProductItem>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductList;
