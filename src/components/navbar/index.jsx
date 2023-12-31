import React from "react";
import { Link } from "react-router-dom";
import { PiBrandyFill } from "react-icons/pi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { carts } = useSelector((state) => state.carts);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-xl">
        <Link className="navbar-brand" to="/">
          <PiBrandyFill size={35} />
          Alta-commerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link " aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link" href="#">
                Products
              </Link>
            </li>
          </ul>
          <Link
            to="/checkout"
            className="navbar-text text-decoration-none relative"
          >
            <AiOutlineShoppingCart size={35} className="" />
            <span
              className="bg-dark text-light rounded-fill px-2 "
              style={{ borderRadius: "100%" }}
            >
              {carts.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
