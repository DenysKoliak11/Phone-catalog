import PhoneBlock from "../PhoneBlock/PhoneBlock";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { SliderPropsType } from "../../types/AllType";
import "swiper/css";

const SliderNewModels = ({ phones }: SliderPropsType) => {
  return (
    <div className="slider">
      <div className="slider__top">
        <h1>Hot price</h1>
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
export default SliderNewModels;
