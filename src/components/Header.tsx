import React from "react";
import Navigation from "./Navigation/Navigation";
import logoSVG from "../assets/img_icon/Logo.svg";
import favoritesSVG from "../assets/img_icon/favorites.svg";
import cartSVG from "../assets/img_icon/cart-icon.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setCategoryId } from "../redux/slice/filterSlice";

const Header: React.FC = () => {
  const { categoryId } = useSelector((state: RootState) => state.filter);
  const { itemFavorites } = useSelector((state: RootState) => state.favorites);
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const cartItemTotal: number = cartItems.length;
  const favoritesItemTotal: number = itemFavorites.length;

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  return (
    <header className="header">
      <div className="header_column">
        <img className="header_logo" src={logoSVG} alt="logo" />
        <Navigation
          valueCategory={categoryId}
          onChangeCategory={onChangeCategory}
        />
      </div>
      <div className="header_column">
        <Link
          to="/favorites"
          className={
            categoryId === 4
              ? "header_button header_button--border active"
              : "header_button header_button--border"
          }
          onClick={() => onChangeCategory(4)}
        >
          <img src={favoritesSVG} alt="favorites" />
          {favoritesItemTotal > 0 ? <span>{favoritesItemTotal}</span> : ""}
        </Link>
        <Link
          to="/cart"
          className={
            categoryId === 5 ? "header_button active" : "header_button"
          }
          onClick={() => onChangeCategory(5)}
        >
          <img src={cartSVG} alt="cart" />
          {cartItemTotal > 0 && <span>{cartItemTotal}</span>}
        </Link>
      </div>
    </header>
  );
};
export default Header;
