import React, { useEffect, useState } from "react";
import { Layout } from "../layout";
import { useParams } from "react-router-dom";
import gmb from "../../assets/sepatu.jpeg";

export default function DetailProduct() {
  function formatRupiah(angka = 0) {
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }

  let params = useParams();

  const [product, productSet] = useState({});

  async function getDetailProduct(params) {
    try {
      const res = await fetch(`http://localhost:3000/products/${params.id}`);
      const jsonData = await res.json();
      productSet(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDetailProduct(params);
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-8">
            <img
              src={gmb}
              className="img-fluid rounded mx-auto d-block"
              alt="..."
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h2 className="fw-normal m-0">{product.name}</h2>
            <p className="">{product.desc}</p>
            <p className="fs-2">
              <strong> {formatRupiah(product.price)} </strong>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
