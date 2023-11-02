import React, { useEffect, useMemo } from "react";
import Carousel from "../components/Carousel/Carousel";
import Slider from "../components/Slider/Slider";
import Categories from "../components/Categories/Categories";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slice/filterSlice";
import product from "../assets/products.json";
const Home = () => {
  const dispatch = useDispatch();

  const getHotPriceProducts = useMemo(() => {
    return [...product].sort(
      (a, b) => b.fullPrice - b.price - (a.fullPrice - a.price)
    );
  }, [product]);
  const getNewProducts = useMemo(() => {
    return [...product].sort((a, b) => b.year - a.year);
  }, [product]);
  console.log(getHotPriceProducts);
  console.log(getNewProducts);

  useEffect(() => {
    dispatch(setCategoryId(0));
  }, []);
  return (
    <section className="home">
      <Carousel />

      <Slider phones={getHotPriceProducts}>Hot price</Slider>
      <Categories />
      <Slider phones={getNewProducts}>Brand new models</Slider>
    </section>
  );
};
export default Home;
