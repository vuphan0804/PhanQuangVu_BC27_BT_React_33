import React, { Component } from "react";
import ProductList from "./ProductList";
import data from "./data";
import ProductDetails from "./ProductDetails";

class ShoesStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: null,
      isOpen: false,
    };
  }

  handleSelect = (product) => {
    this.setState({ selectedProduct: product });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };
  render() {
    const { selectedProduct, isOpen } = this.state;
    return (
      <div className="container">
        <h1>Shoes Store</h1>
        <ProductList
          products={data}
          onSelect={this.handleSelect}
          handleOpen={this.handleOpen}
        ></ProductList>
        <ProductDetails
          product={selectedProduct}
          isOpen={isOpen}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default ShoesStore;
