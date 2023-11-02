import React from "react";
import { Link } from "react-router-dom";
import Page from "../../constant/Page";

const Categories = () => {
  return (
    <div className="categories">
      <h1>Shop by category</h1>
      <div className="categories__items">
        <Link to={Page.Phones} className="categories__item">
          <div className="categories__item-img">
            <img src="_new/img/category-phones.png" alt="" />
          </div>
          <div className="categories__item-title">Mobile phones</div>
          <span className="categories__item-count">95 models</span>
        </Link>
        <Link to={Page.Tablets} className="categories__item">
          <div className="categories__item-img">
            <img src="_new/img/category-tablets.png" alt="" />
          </div>
          <div className="categories__item-title">Tablets</div>
          <span className="categories__item-count">24 models</span>
        </Link>
        <Link to={Page.Accessories} className="categories__item">
          <div className="categories__item-img categories__item_img--accessories">
            <img src="_new/img/category-accessories.png" alt="" />
          </div>
          <div className="categories__item-title">Accessories</div>
          <span className="categories__item-count">100 models</span>
        </Link>
      </div>
    </div>
  );
};
export default Categories;
