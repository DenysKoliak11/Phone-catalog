import React, { useEffect, useMemo, useState } from "react";
import Sort from "../components/Sort/Sort";
import products from "../assets/products.json";
import PhoneBlock from "../components/PhoneBlock/PhoneBlock";
import PaginationPhones from "../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slice/filterSlice";
import { PhonesType } from "../types/AllType";
import { RootState } from "../redux/store";
import { setPhones } from "../redux/slice/phonesSlice";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const Phones = () => {
  const dispatch = useDispatch();
  const sortProperty = useSelector(
    (state: RootState) => state.filter.sortBy.sortProperty
  );
  const itemsOnPage = useSelector(
    (state: RootState) => state.filter.itemsOnPage
  );
  const currentPage = useSelector(
    (state: RootState) => state.filter.currentPage
  );
  const phones = useSelector((state: RootState) => state.phones.storeItems);

  useEffect(() => {
    dispatch(setCategoryId(1));
    setTimeout(() => {
      dispatch(setPhones(products));
    }, 500);
  }, [dispatch]);

  const sortedPhones = useMemo(() => {
    if (!phones) return null;

    return [...phones].sort((a, b) => {
      if (sortProperty === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortProperty === "year") {
        return b.year - a.year;
      } else if (sortProperty === "price") {
        return a.price - b.price;
      }
      return 0;
    });
  }, [phones, sortProperty]);

  const indexOfLastItem = currentPage * itemsOnPage;
  const indexOfFirstItem = indexOfLastItem - itemsOnPage;
  const currentItems = sortedPhones?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {}, [sortProperty, phones]);

  const mapPhones = (phone: PhonesType) => (
    <PhoneBlock key={phone.itemId} {...phone} />
  );

  return (
    <div className="phones">
      <Breadcrumbs />
      <h1>Mobile phones</h1>
      <span className="phones__total">{phones?.length} models</span>
      {phones && <Sort />}
      <div className="phones__container">{currentItems?.map(mapPhones)}</div>
      {phones && <PaginationPhones sortedPhones={sortedPhones} />}
    </div>
  );
};
export default Phones;
