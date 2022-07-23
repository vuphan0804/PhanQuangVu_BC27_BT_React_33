import React from "react";

const ProductDetails = ({ product, isOpen, handleClose }) => {
  const handleSubmit = () => {
    handleClose();
  };
  if (!product) {
    return null;
  }
  return (
    <div
      style={{ display: isOpen ? "block" : "none" }}
      className="modal fade show"
      tabIndex={-1}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Shoes</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => handleSubmit()}
            />
          </div>
          <div className="modal-body">
            <div className="row mt-5">
              <div className="col-sm-6">
                <img
                  src={product.image}
                  alt={product.name}
                  width="100%"
                  height="500px"
                />
              </div>
              <div className="col-sm-6">
                <h1>Detail</h1>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{product.name}</td>
                    </tr>
                    <tr>
                      <td>Alias</td>
                      <td>{product.alias}</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>{product.price}</td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td>{product.description}</td>
                    </tr>
                    <tr>
                      <td>Show Description</td>
                      <td>{product.shortDescription}</td>
                    </tr>
                    <tr>
                      <td>Quantity</td>
                      <td>{product.quantity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => handleSubmit()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
