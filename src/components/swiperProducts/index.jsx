import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import CardProduct from "../cardProduct";

const SwiperProducts = () => {
  const [products, productsSet] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

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
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {products?.map((e, i) => {
        return (
          <SwiperSlide>
            <Link
              to={`/products/${e.id}`}
              className="col-6 col-sm-4 col-lg-3 text-decoration-none "
              key={i}
            >
              <CardProduct product={e} />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperProducts;
