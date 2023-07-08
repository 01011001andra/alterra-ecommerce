import React from "react";
import gmb from "../../assets/sepatu.jpeg";

const ImageDetail = ({image = ""}) => {
  return (
    <div className="row">
      <div className="col-8">
        <img
          src={gmb}
          className="img-fluid rounded mx-auto d-block w-100 "
          alt="gambar produk"
        />
      </div>
      <div className="col-4">
        <div className="row h-100 row-gap-3">
          <div className="col-12">
            <img
              src={gmb}
              className="img-fluid rounded mx-auto d-block w-100 h-100"
              alt="gambar produk"
            />
          </div>
          <div className="col-12">
            <img
              src={gmb}
              className="img-fluid rounded mx-auto d-block w-100 h-100"
              alt="gambar produk"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
