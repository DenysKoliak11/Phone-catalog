import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slice/filterSlice";
import ArrowLeft from "../assets/img_icon/Arrow-Light.svg";
import { RootState } from "../redux/store";
import CartBlock from "../components/CartBlock/CartBlock";
import { useNavigate } from "react-router-dom";
import CartEmpty from "../components/CartEmpty/CartEmpty";
import { clearItem } from "../redux/slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { cartItems, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  const goBack = () => navigation(-1);
  const onClickClear = () => {
    dispatch(clearItem());
  };
  useEffect(() => {
    dispatch(setCategoryId(5));
  }, []);
  return (
    <div className="cart">
      <div className="cart-btn_back" onClick={goBack}>
        <img src={ArrowLeft} alt="" />
        <span>Back</span>
      </div>
      <h1 className="cart-title">Cart</h1>
      <div className="cart-container">
        <div className="cart-item">
          {cartItems.map((obj) => (
            <CartBlock
              key={obj.name}
              id={obj.id}
              name={obj.name}
              price={obj.price}
              image={obj.image}
              count={obj.count}
              phoneId={obj.phoneId}
            />
          ))}
        </div>
        <div className="cart-totalPrice">
          <strong>${totalPrice}</strong>
          <span>Total for {cartItems.length} items</span>
          <button onClick={onClickClear}>Checkout</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
