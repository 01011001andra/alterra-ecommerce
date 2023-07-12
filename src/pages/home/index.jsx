import React, { useEffect, useState } from "react";
import { Layout } from "../layout";
// import Carousel from 'bootstrap'
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/productSlice";
import './home.css'
import { Link } from 'react-router-dom';
import SwiperProducts from '../../components/swiperProducts';

export default function Home() {
  const dispatch = useDispatch();
  const { status, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Layout>
      <div class="d-flex justify-content-center">
        <div class="content" style={{ width: "996px" }}>
          <div className="big-banner-wrapper mb-5">
            <h4 className="text-center mb-4 fw-bold">
              ZALORA 7.7 Sale: Shop Now!
            </h4>
            <img
              src="https://images.ctfassets.net/9q8du028z7sn/7IAouA7HFVRSXpYg7fM8Hp/78d6ebd51a2d5cb04aa6f0f325d0908c/996x500_HERO___10_.jpg"
              class="img-fluid rounded mx-auto d-block"
              alt="Responsive image"
            ></img>
          </div>
          <div className="post-banner-wrapper mb-5">
            <Carousel className="custom-carousel rounded" interval={4000}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.ctfassets.net/9q8du028z7sn/6TA1Lt4dviUMDsokmRWax6/068ab1c5eb865bddf9048c9510cad6a9/996X150_FATSKINNYFDESKTOP_ZNOW_BDAY__4_.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.ctfassets.net/9q8du028z7sn/580hLTOH3bFuGyAqswXl0y/9b30d55fa2c51fb2471398d2ff578c3a/996X150_DSKP_FATSKINNY_E-GiftCard-Re-activation.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.ctfassets.net/9q8du028z7sn/5Smj0PkUQCbQIldHjvAtHL/d525f914efd0bae49d5dd1665fa2d22b/DESKTOP_Fat_Skinny_Influencer_NEW_35A.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.ctfassets.net/9q8du028z7sn/7rpjAud1Jh7QZGgU8hpgV/8fece43fb2f162d6213ad6e3de1b07b3/996x150_TETAPMELAYANIANDA_30A.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className='recommended-wrapper'>
            {/* <h4 className='text-center mb-4 fw-bold'>Kamu Mungkin Suka Produk Ini</h4> */}
            <div className="row">
            </div>
            <SwiperProducts />
          </div>
        </div>
      </div>
    </Layout>
  );
}
