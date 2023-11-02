import React from "react";
import { Link } from "react-router-dom";
type CategoryProps = {
  valueCategory: number;
  onChangeCategory: (i: number) => void;
};
const Navigation = ({ valueCategory, onChangeCategory }: CategoryProps) => {
  const categoriesList = ["home", "phones", "tablets", "accessories"];
  const linkList = ["/", "/phones", "/tablets", "/accessories"];
  return (
    <ul className="nav">
      {categoriesList.map((item, index) => (
        <li className="nav_link" key={index}>
          <Link
            className={valueCategory === index ? "active" : ""}
            onClick={() => onChangeCategory(index)}
            to={linkList[index]}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Navigation;
