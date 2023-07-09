import React, { useEffect, useState } from "react";
import { Layout } from "../layout";
import CardProduct from "../../components/cardProduct";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/productSlice";

export default function Products() {
  const dispatch = useDispatch();
  const { status, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Layout>
      <div className="container d-flex flex-column gap-3">
        <div className="row">
          <div className="col-12">PRODUCTS</div>
        </div>
        <div className="row d-flex justify-center row-gap-3">
          {products?.map((e, i) => {
            return (
              <Link
                to={`/products/${e.id}`}
                className="col-6 col-sm-4 col-lg-3 text-decoration-none"
                key={i}
              >
                <CardProduct product={e} />
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
