import React, { useEffect, useState } from "react";
import { Layout } from "../layout";
import CardProduct from "../../components/cardProduct";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, productsSet] = useState([]);

  async function getProducts() {
    try {
      const res = await fetch("http://localhost:3000/products");
      const jsonData = await res.json();
      productsSet(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  const listOfTopi = products.filter((e) => e.category === "topi");
  const listOfPants = products.filter((e) => e.category === "celana");

  useEffect(() => {
    getProducts();
  }, []);

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
