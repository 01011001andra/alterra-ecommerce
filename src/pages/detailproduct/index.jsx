import React, { useEffect, useState } from "react";
import { Layout } from "../layout";
import { useParams } from "react-router-dom";
import ImageDetail from "./ImageDetail";
import DescDetail from "./DescDetail";
import ButtonAddToCart from "../../components/buttonToCart";
import "./detailProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../store/slices/productSlice";

export default function DetailProduct() {
  const dispatch = useDispatch();
  let params = useParams();

  const { productsById } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(params.id));
  }, [dispatch]);

  return (
    <Layout>
      <div className="container-detail">
        <div className="row row-gap-3">
          <div className="col-12 col-md-6 col-lg-8">
            <ImageDetail images={productsById.images} />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <DescDetail product={productsById} />
          </div>
        </div>
        <div className="position-sticky bottom-0 start-0 w-100 btn-flying">
          <ButtonAddToCart text={"Tambahkan ke Keranjang"} />
        </div>
      </div>
    </Layout>
  );
}
