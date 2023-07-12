import React, { useEffect } from "react";
import { Layout } from "../layout";
import { MdLocationOn } from "react-icons/md";
import { PiBrandyFill } from "react-icons/pi";
import "./styles.css";
import SwiperProducts from "../../components/swiperProducts";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/productSlice";
import CardItems from "./card-checkout";
import { MdShoppingCartCheckout } from "react-icons/md";
import CardProduct from "../../components/cardProduct";
import { Link } from "react-router-dom";

export default function Checkout() {
  const dispatch = useDispatch();
  const { status, products, error } = useSelector((state) => state.products);
  const [item, setItem] = React.useState(true);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let ifEmpty = (
    <div className="w-100">
      <div className="w-100 d-flex justify-content-center items-align-center">
        <div className="mb-4 d-flex flex-column">
          <MdShoppingCartCheckout size={160} className="mx-auto" />
          <div className="d-flex flex-column ">
            <h4 className="text-center">Keranjang anda kosong</h4>
            <p>Ayo penuhi dengan barang-barang favorit Anda</p>
          </div>
          <div className="d-flex justify-content-center">
            <Link
              to="/"
              className="belanja_button border-0 py-3 px-5 rounded text-decoration-none"
            >
              Ayo Belanja!
            </Link>
          </div>
        </div>
      </div>
      <div className="cards d-flex flex-column justify-center p-4 ">
        <h4>Rekomendasi untuk Kamu</h4>
        <div className="row">
          {products.products?.map((e, i) => {
            return (
              <CardProduct
                product={e}
                button={true}
                classnameLink="col-12 col-sm-6 col-md-4 col-lg-3"
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );

  let leftContent = (
    <>
      <h1 className="fs-4 fw-bold">Keranjang</h1>
      {/* ALAMAT */}
      <div className="d-flex gap-1 border border-danger p-3 rounded-3">
        <MdLocationOn size={35} />
        <div className="d-flex flex-column">
          <h3 className="fs-5 fw-bold">ALAMAT PENGIRIMAN</h3>
          <p>
            Masuk/Daftar untuk Menambahkan alamat (atau) Melihat alamat yang
            disimpan.
          </p>
        </div>
      </div>
      {/* CARD ITEMS */}
      <div className="cards d-flex gap-3 flex-column gap-1 p-3 rounded-3 border-0">
        <div className="d-flex ">
          <PiBrandyFill size={35} />
          <div className="d-flex flex-column">
            <h3 className="fs-5 fw-bold">ALTA</h3>
            <p>
              Masuk/Daftar untuk Menambahkan alamat (atau) Melihat alamat yang
              disimpan.
            </p>
          </div>
        </div>
        <CardItems />
      </div>
    </>
  );

  let rightContent = (
    <div className="w-100 d-flex flex-column ">
      <h5>Jumlah Pesanan</h5>
      <div className="pesanan w-100 p-3 d-flex flex-column">
        <div className="d-flex justify-content-between pb-2">
          <h6>Subtotal (2 produk)</h6>
          <h6>Rp 1.599.000</h6>
        </div>
        <div className="borderY d-flex flex-column py-2 pb-3 gap-1">
          <span>Pengiriman</span>
          <div className="d-flex gap-1 border border-danger p-2 rounded-3 ">
            <span>
              Masuk/Daftar untuk Menambahkan alamat (atau) Melihat alamat yang
              disimpan.
            </span>
          </div>
        </div>
        <div className="w-100 pt-2 d-flex flex-column">
          <div className="d-flex justify-content-between pb-2">
            <h6>Total</h6>
            <h6>Rp 1.599.000</h6>
          </div>
          <button className="belanja_button rounded py-2">
            Lanjutkan ke Pembayaran
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <Layout>
      {item ? (
        <div className="row justify-contenet-between mb-5">
          <div className="checkout_items col-12 col-lg-7 d-flex flex-column gap-4">
            {leftContent}
          </div>
          <div className="checkout_price col-12 col-lg-4 h-100 sticky-top">
            {rightContent}
          </div>
          <SwiperProducts />
        </div>
      ) : (
        ifEmpty
      )}
    </Layout>
  );
}
