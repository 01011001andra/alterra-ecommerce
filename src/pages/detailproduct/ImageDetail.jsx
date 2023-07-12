import React from "react";

const ImageDetail = ({ images = [] }) => {
  return (
    <div className="row">
      <div className="col-8">
        <img
          src={images[0]}
          className="img-fluid rounded mx-auto d-block w-100 shadow"
          alt="gambar produk"
        />
      </div>
      <div className="col-4">
        <div className="row h-100 row-gap-3">
          <div className="col-12">
            <img
              src={images[1]}
              className="img-fluid rounded mx-auto d-block w-100 h-100 shadow"
              alt="gambar produk"
            />
          </div>
          <div className="col-12">
            <img
              src={images[2]}
              className="img-fluid rounded mx-auto d-block w-100 h-100 shadow"
              alt="gambar produk"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
