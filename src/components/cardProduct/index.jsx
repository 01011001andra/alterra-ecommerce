import { Link } from "react-router-dom";
import "./cardProduct.css";

const CardProduct = ({ product = {}, button = true }) => {
  function formatRupiah(angka) {
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }

  return (
    <div className="card card-product box-hover mx-auto p-2">
      <Link to={`/products/${product.id}`} className="text-decoration-none">
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
        <button className="btn btn-outline-primary w-100">Add To Cart</button>
      )}
    </div>
  );
};

export default CardProduct;
