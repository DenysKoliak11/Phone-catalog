import React from "react";
import CarouselItem from "./CarouselItem";

import ArrowLeft from "../../assets/img_icon/Arrow-Light.svg";
import ArrowRight from "../../assets/img_icon/Arrow-Right.svg";
import CarouselControls from "./CarouselControls";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";

const Carousel = () => {
  const slides = [
    "/_new/img/banner-phones.png",
    "/_new/img/banner-tablets.png",
    "/_new/img/banner-accessories.png",
  ];
  return (
    <div className="carousel">
      <div className="carousel__container">
        <div className="carousel__button swiper-button-prev">
          <img src={ArrowLeft} alt="" />
        </div>
        <Swiper
          className="carousel__inner"
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".carousel__indicators",
            clickable: true,
            bulletActiveClass: "active",
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <CarouselItem slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="carousel__button swiper-button-next">
          <img src={ArrowRight} alt="" />
        </div>
      </div>

      <CarouselControls />
    </div>
  );
};
export default Carousel;
