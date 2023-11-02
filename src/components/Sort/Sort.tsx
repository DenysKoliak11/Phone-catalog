import React, { useState } from "react";
import { sortTheList } from "../../constant/sortList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setSort } from "../../redux/slice/filterSlice";

const Sort = () => {
  const dispatch = useDispatch();
  const { sortBy } = useSelector((state: RootState) => state.filter);
  const [isVisibleSort, setIsVisibleSort] = useState(false);

  const OnClickSortList = (obj: any) => {
    dispatch(setSort(obj));
    setIsVisibleSort(false);
  };

  return (
    <div className="sort">
      <div className="sort__dropdown">
        <span>Sort by</span>
        <div
          className={
            isVisibleSort
              ? "sort__dropdown-label active"
              : "sort__dropdown-label"
          }
          onClick={() => setIsVisibleSort(!isVisibleSort)}
          style={{ minWidth: "127px" }}
        >
          {sortBy.sortName}
          <img src="/_new/img/Arrow-Down.svg" alt="" />
        </div>
        <div className="sort__dropdown-popup">
          {isVisibleSort && (
            <ul>
              {sortTheList.map((obj, index) => (
                <li key={index} onClick={() => OnClickSortList(obj)}>
                  {obj.sortName}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default Sort;
