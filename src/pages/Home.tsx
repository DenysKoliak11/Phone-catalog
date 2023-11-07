import React, { useEffect, useMemo } from "react";
import Carousel from "../components/Carousel/Carousel";
import SliderHotPrice from "../components/Slider/SliderHotPrice";
import SliderNewModels from "../components/Slider/SliderNewModels";
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
  }, []);
  const getNewProducts = useMemo(() => {
    return [...product].sort((a, b) => b.year - a.year);
  }, []);

  useEffect(() => {
    dispatch(setCategoryId(0));
  }, [dispatch]);
  return (
    <section className="home">
      <Carousel />

      <SliderHotPrice phones={getHotPriceProducts} />
      <Categories />
      <SliderNewModels phones={getNewProducts} />
    </section>
  );
};
export default Home;
