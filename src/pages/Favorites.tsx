import React, { useEffect } from "react";
import PhoneBlock from "../components/PhoneBlock/PhoneBlock";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setCategoryId } from "../redux/slice/filterSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const { itemFavorites } = useSelector((state: RootState) => state.favorites);
  useEffect(() => {
    dispatch(setCategoryId(4));
  }, []);
  return (
    <div className="favorites">
      <h1>Favourites</h1>
      <span className="favorites__total">{itemFavorites.length} items</span>
      <div className="favorites__container">
        {itemFavorites.map((obj) => (
          <PhoneBlock
            key={obj.id}
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
        ))}
      </div>
    </div>
  );
};
export default Favorites;
