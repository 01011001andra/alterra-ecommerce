import React from "react";
import { Layout } from "../layout";
import { MdLocationOn } from "react-icons/md";
import { PiBrandyFill } from "react-icons/pi";
import "./styles.css";

export default function Checkout() {
  return (
    <Layout>
      <div className="row justify-contenet-between">
        <div className="checkout_items col-12 col-lg-7 d-flex flex-column gap-4">
          <h1 className="fs-4 fw-bold">Tas</h1>
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
          <div className="cards d-flex gap-1 p-3 rounded-3 border-0">
            <PiBrandyFill size={35} />
            <div className="d-flex flex-column">
              <h3 className="fs-5 fw-bold">ALTA</h3>
              <p>
                Masuk/Daftar untuk Menambahkan alamat (atau) Melihat alamat yang
                disimpan.
              </p>
            </div>
          </div>
        </div>
        <div className="checkout_price col-12 col-lg-4">2</div>
      </div>
    </Layout>
  );
}
