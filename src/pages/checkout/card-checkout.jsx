import React from "react";
import "./styles.css";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart, increaseProduct } from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";

const CardItems = ({ brand, category, price, image, quantity, link }) => {
  const dispatch = useDispatch();
  return (
    <Link
      to={`/products/${link}`}
      className="card_items w-100 p-4 text-decoration-none text-black"
    >
      <div className="d-flex gap-3">
        <img src={`${image}`} alt={brand} className="w-25" />

        <div
          className="d-flex flex-column justify-content-between w-100 gap-5"
          onClick={(e) => e.preventDefault()}
        >
          <div className="d-flex flex-column gap-2">
            <div className="d-flex justify-content-between">
              <span className="fs-6">{brand}</span>
              <MdOutlineClose size={25} />
            </div>
            <span>{category}</span>
            <span className="fw-bold">$ {price}</span>
            <div className="mt-2 d-flex gap-4 align-items-center w-50">
              <span className="p-3 fs-4" role="button">
                -
              </span>
              <span className="border px-3 my-auto px-lg-4">{quantity}</span>
              <span
                className="p-3 fs-4"
                role="button"
                onClick={() => {
                  return dispatch(increaseProduct());
                }}
              >
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardItems;
