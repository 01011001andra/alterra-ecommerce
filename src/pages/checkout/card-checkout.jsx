import React from "react";
import "./styles.css";
import { MdOutlineClose } from "react-icons/md";

const CardItems = () => {

  return (
    <div className="card_items w-100 p-4">
      <div className="d-flex gap-3">
        <img src="src/assets/topi.jpeg" alt="topi" className="w-25" />
        <div className="d-flex flex-column justify-content-between w-100 gap-5">
          <div className="d-flex flex-column gap-2">
            <div className="d-flex justify-content-between">
              <span className="fs-6">All Star</span>
              <MdOutlineClose size={25} />
            </div>
            <span>Pegasus 40 Topi</span>
            <span>Ukuran: EU 44</span>
            <div className="mt-2 d-flex gap-4  align-items-center w-50">
              <span className="p-3">-</span>
              <span className="border px-3 px-lg-4">3</span>
              <span className="p-3">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
