import React, { useEffect, useState } from "react";
import { Layout } from "../layout";
import CardProduct from "../../components/cardProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, removeDetail } from "../../store/slices/productSlice";
import "./products.css";

export default function Products() {
  const dispatch = useDispatch();
  const { status, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(removeDetail());
  }, [dispatch]);

  const productByCategory = [
    {
      name: "Smartphones",
      category: "smartphones",
      dataArr: products.products.filter((e) => e.category === "smartphones"),
    },
    {
      name: "Laptops",
      category: "laptops",
      dataArr: products.products.filter((e) => e.category === "laptops"),
    },
    {
      name: "Fragrances",
      category: "fragrances",
      dataArr: products.products.filter((e) => e.category === "fragrances"),
    },
    {
      name: "Skincare",
      category: "skincare",
      dataArr: products.products.filter((e) => e.category === "skincare"),
    },
    {
      name: "Groceries",
      category: "groceries",
      dataArr: products.products.filter((e) => e.category === "groceries"),
    },
    {
      name: "Home Decoration",
      category: "home-decoration",
      dataArr: products.products.filter(
        (e) => e.category === "home-decoration"
      ),
    },
  ];

  return (
    <Layout>
      <div className="container d-flex flex-column gap-3">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">PRODUCTS</h1>
          </div>
        </div>

        <div className="d-flex flex-column gap-5">
          {productByCategory?.map((e, i) => {
            return (
              <div className="row d-flex justify-center row-gap-3" key={i}>
                <h3>{e.name}</h3>
                <div className="d-flex gap-4 flex-nowrap overflow-x-scroll pb-3 custom-sroll">
                  {e.dataArr?.map((e, i) => {
                    return (
                      <div
                        className="wrapper-card-product text-decoration-none "
                        key={i}
                      >
                        <CardProduct product={e} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
