import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchProducts } from "../../store/slices/productSlice";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import CardProduct from "../cardProduct";
import { useDispatch, useSelector } from "react-redux";

const SwiperProducts = () => {
  const dispatch = useDispatch();
  const { status, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
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
