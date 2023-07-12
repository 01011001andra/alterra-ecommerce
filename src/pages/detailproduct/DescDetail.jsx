import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import ButtonAddToCart from "../../components/buttonToCart";

const DescDetail = ({ product = {} }) => {
  function formatRupiah(angka = 0) {
    return angka.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  const rate = Math.round(product.rating) || [];

  return (
    <div className="">
      <h2 className="fw-normal m-0">{product.title}</h2>
      <div className="d-flex gap-2 flex-wrap mb-3">
        <p className="d-flex align-items-center flex-wrap m-0">
          {product.category} ~ {product.brand}
        </p>
        <div style={{ color: "gray" }}>|</div>
        <div className="d-flex align-items-center">
          {[...Array(rate)]?.map((e, i) => {
            return <BsFillStarFill key={i} color="yellow" />;
          })}
        </div>
      </div>

      <p>Stok : {product.stock}</p>

      <p className="fs-2">
        <strong> {formatRupiah(product.price)} </strong>
      </p>

      <div className="btn-addToCart mb-3">
        <ButtonAddToCart text={"Masukan ke keranjang"} product={product} />
      </div>

      <div>
        <h5>Rincian</h5>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default DescDetail;
