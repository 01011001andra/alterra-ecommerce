import React, { useEffect, useState } from "react";
import { Layout } from "../layout";
import { useParams } from "react-router-dom";
import ImageDetail from "./ImageDetail";
import gmb from "../../assets/sepatu.jpeg";
import DescDetail from "./DescDetail";
import ButtonAddToCart from "../../components/buttonToCart";
import "./detailProduct.css"

export default function DetailProduct() {
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
        <div className="row row-gap-3">
          <div className="col-12 col-md-6 col-lg-8">
            <ImageDetail image={product.url} />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <DescDetail product={product} />
          </div>
        </div>
        <div className="position-sticky bottom-0 start-0 w-100 btn-flying">
          <ButtonAddToCart text={"Tambahkan ke Keranjang"} />
        </div>
      </div>
    </Layout>
  );
}
