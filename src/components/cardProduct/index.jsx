import { Link } from "react-router-dom";
import "./cardProduct.css";
import ButtonAddToCart from "../buttonToCart";

const CardProduct = ({ product = {}, button = true, classnameLink }) => {
  // console.log(product.id);
  function formatRupiah(angka) {
    return angka.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <div className="card card-product box-hover mx-auto p-2 ">
      <Link
        to={`/products/${product.id}`}
        className={`${classnameLink} text-decoration-none w-100`}
      >
        <img
          src={product.thumbnail}
          className="card-img-top img-product"
          alt="..."
        />
        <div className="card-body">
          <p className="text-nowrap overflow-hidden text display-h5 fs-6">
            {product.title}
          </p>
          <p className="card-text text-nowrap overflow-hidden text">
            {product.description}
          </p>
          <p className="card-title text-nowrap overflow-hidden text fs-4">
            {formatRupiah(product.price)}
          </p>
        </div>
      </Link>
      {button && (
        <ButtonAddToCart
          product={product}
          text={"add to cart"}
          className="btn btn-outline-primary w-100"
        >
          Add To Cart
        </ButtonAddToCart>
      )}
    </div>
  );
};

export default CardProduct;
