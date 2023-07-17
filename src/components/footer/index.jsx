import React from "react";
import { PiBrandyFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="text-center text-lg-start bg-light text-muted">
      <section class=" d-flex justify-content-center container-xl  justify-content-lg-between p-4 border-bottom">
        <Link className="navbar-brand mx-auto" to="/">
          <PiBrandyFill size={35} />
          Alta-commerce
        </Link>
      </section>

      <section class="">
        <div class="container-xl text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4 text-center">
                <p className=" fw-bold fs-4">Build with ❤️ by US</p>
              </h6>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
