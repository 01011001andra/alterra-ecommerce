import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import ButtonAddToCart from "../../components/buttonToCart";

const DescDetail = ({ product = {} }) => {
  function formatRupiah(angka = 0) {
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }

  return (
    <div className="">
      <h2 className="fw-normal m-0">{product.title}</h2>
      
      <div className="d-flex gap-2 flex-wrap mb-3">
        <p className="d-flex align-items-center flex-wrap m-0">
          {product.desc}
        </p>
        <div>|</div>
        <div className="d-flex align-items-center">
          {[...Array(5)].map((e, i) => {
            return <BsFillStarFill key={i} color="yellow" />;
          })}
        </div>
      </div>

      <p className="fs-2">
        <strong> {formatRupiah(product.price)} </strong>
      </p>


      <div className="btn-addToCart mb-3">
        <ButtonAddToCart text={"Masukan ke keranjang"} />
      </div>

      <div>
        <h5>Rincian</h5>
        <p>
          Polo shirt bergaya casual sangat cocok buat aktivitas sehari-hari -
          Warna New Navy - Bordir logo di dada - Detail kerah yang Unik -
          Unlined / line - Regular fit - Kancing depan 2 Baris - Material katun
          tidak transparan, ringan dan tidak stretch - Cocok untuk Acara Semi
          Formal maupun Casual - Tinggi model 185 cm, lingkar dada 98 cm, Model
          mengenakan ukuran M Warna pada gambar dapat sedikit berbeda dengan
          warna asli produk akibat pencahayaan saat proses photoshoot. SKU
          XPM025
        </p>
      </div>

    </div>
  );
};

export default DescDetail;
