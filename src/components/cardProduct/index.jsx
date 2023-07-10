import "./cardProduct.css";

const CardProduct = ({ product = {}, button = false }) => {
  function formatRupiah(angka) {
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }

  return (
    <div className="card card-product box-hover mx-auto">
      <img src={product.thumbnail} className="card-img-top img-product" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-nowrap overflow-hidden">
          {product.title}
        </h5>
        <p className="card-text text-nowrap overflow-hidden">{product.description}</p>
        <p className="card-text text-nowrap overflow-hidden">
          {formatRupiah(product.price)}
        </p>
        {button && (
          <button className="btn btn-outline-primary w-100">Add To Cart</button>
        )}
      </div>
    </div>
  );
};

export default CardProduct;
