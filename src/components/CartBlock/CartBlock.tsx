import React from "react";
import plus from "../../assets/img_icon/plus.svg";
import Minus from "../../assets/img_icon/Minus.svg";
import {
  CartItemType,
  removeItem,
  plusCount,
  minusCount,
} from "../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";

function CartBlock({ id, name, price, image, count, phoneId }: CartItemType) {
  const dispatch = useDispatch();
  const removeCartItem = (id: string) => {
    dispatch(removeItem(id));
  };
  const plusCounter = (id: string) => {
    dispatch(plusCount(id));
  };
  const minusCounter = (id: string) => {
    dispatch(minusCount(id));
  };
  return (
    <div className="cart-block">
      <button
        type="button"
        className="cart-block_btn"
        onClick={() => removeCartItem(id)}
      >
        <img src={plus} alt="close" className="cart-block_close" />
      </button>
      <div className="cart-block_img">
        <img src={`/_new/${image}`} alt="" />
      </div>
      <span className="cart-block_title">{name}</span>
      <div className="cart-block_counter">
        <button disabled={count <= 1} onClick={() => minusCounter(id)}>
          <img src={Minus} alt="" />
        </button>
        <span>{count}</span>
        <button onClick={() => plusCounter(id)}>
          <img src={plus} alt="" />
        </button>
      </div>
      <span className="cart-block_price">${count * price}</span>
    </div>
  );
}
export default CartBlock;
