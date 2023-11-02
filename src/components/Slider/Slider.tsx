import React from "react";
import PhoneBlock from "../PhoneBlock/PhoneBlock";
import ArrowButton from "../ArrowButton/ArrowButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { SlidePhones } from "../../types/PhoneType";
import "swiper/css";

interface SliderProps {
  children: string;
  phones: SlidePhones[];
}
const Slider = ({ children, phones }: SliderProps) => {
  return (
    <div className="slider">
      <div className="slider__top">
        <h1>{children}</h1>
        <div className="slider__buttons">
          <div className="arrow arrow-button-prev">
            <img src="/_new/img/Arrow-Light.svg" alt="arrow" />
          </div>
          <div className="arrow arrow-button-next">
            <img src="/_new/img/Arrow-Right.svg" alt="arrow" />
          </div>
        </div>
      </div>
      <Swiper
        className="slider__content"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
        }}
        navigation={{
          nextEl: ".arrow-button-next",
          prevEl: ".arrow-button-prev",
        }}
        modules={[Navigation]}
      >
        {phones.map((obj) => (
          <SwiperSlide key={obj.id}>
            <PhoneBlock
              id={obj.id}
              name={obj.name}
              fullPrice={obj.fullPrice}
              price={obj.price}
              screen={obj.screen}
              capacity={obj.capacity}
              ram={obj.ram}
              image={obj.image}
              phoneId={obj.phoneId}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
