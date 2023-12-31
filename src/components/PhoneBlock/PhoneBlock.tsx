import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addCart, CartItemProps } from "../../redux/slice/cartSlice";
import { addFavorite, favoritesItem } from "../../redux/slice/favoritesSlice";
import { Link } from "react-router-dom";

interface PhoneBlockProps {
  id: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  ram: string;
  image: string;
  phoneId: string;
}
const PhoneBlock = ({
  id,
  name,
  fullPrice,
  price,
  screen,
  capacity,
  ram,
  image,
  phoneId,
}: PhoneBlockProps) => {
  const dispatch = useDispatch();
  const favoritesItem = useSelector((state: RootState) =>
    state.favorites.itemFavorites.find((item) => item.id === id)
  );
  const cartItems = useSelector((state: RootState) =>
    state.cart.cartItems.find((item) => item.id === id)
  );

  const onClickAddCart = () => {
    const item: CartItemProps = {
      id,
      name,
      image,
      price,
      phoneId,
      count: 1,
    };
    dispatch(addCart(item));
  };
  const onClickAddFavorites = () => {
    const item: favoritesItem = {
      id,
      name,
      fullPrice,
      price,
      screen,
      capacity,
      ram,
      image,
      phoneId,
    };
    dispatch(addFavorite(item));
  };
  return (
    <div className="phone">
      <Link to={`/phone/${phoneId}`}>
        <img className="phone__img" src={`/_new/${image}`} alt="" />
      </Link>

      <span className="phone__name">{name}</span>
      <div className="phone__price">
        <strong>${price}</strong>
        <span>${fullPrice}</span>
      </div>
      <div className="phone__details">
        <div className="details">
          <span>Screen</span>
          <strong>{screen}</strong>
        </div>
        <div className="details">
          <span>Capacity</span>
          <strong>{capacity}</strong>
        </div>
        <div className="details">
          <span>RAM</span>
          <strong>{ram}</strong>
        </div>
      </div>
      <div className="phone__btn">
        <button
          type="button"
          className={cartItems ? "cart__btn active" : "cart__btn"}
          onClick={onClickAddCart}
        >
          {cartItems ? "Added to cart" : "Add to cart"}
        </button>
        <button
          type="button"
          className={favoritesItem ? "favorites__btn active" : "favorites__btn"}
          onClick={onClickAddFavorites}
        >
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            stroke="#333"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.3 0.298767C10.7264 0.298767 10.1584 0.411782 9.62852 0.631356C9.09865 0.850909 8.61711 1.17281 8.21162 1.57846L8.00005 1.79003L7.78835 1.57834C6.96928 0.759273 5.85839 0.299124 4.70005 0.299124C3.54171 0.299124 2.43081 0.759273 1.61174 1.57834C0.792668 2.39741 0.33252 3.50831 0.33252 4.66665C0.33252 5.82499 0.792668 6.93589 1.61174 7.75496L7.50507 13.6483C7.77844 13.9217 8.22165 13.9217 8.49502 13.6483L14.3884 7.75496C14.794 7.34947 15.1158 6.86805 15.3353 6.33817C15.5549 5.80825 15.6679 5.24026 15.6679 4.66665C15.6679 4.09304 15.5549 3.52505 15.3353 2.99513C15.1158 2.46531 14.7941 1.98392 14.3885 1.57846C13.983 1.17276 13.5015 0.85093 12.9716 0.631356C12.4416 0.411782 11.8737 0.298767 11.3 0.298767Z"
              fill="#fff"
              stroke="#313237"
            />
            Í
          </svg>
        </button>
      </div>
    </div>
  );
};
export default PhoneBlock;
