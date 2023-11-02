import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { PhonesType } from "../../types/PhoneType";
import { setPagination } from "../../redux/slice/filterSlice";

interface PaginationProps {
  sortedPhones: PhonesType[] | null;
}
const Pagination = ({ sortedPhones }: PaginationProps) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: RootState) => state.filter.currentPage
  );
  const itemsOnPage = useSelector(
    (state: RootState) => state.filter.itemsOnPage
  );

  return (
    <div className="pagination">
      <button
        className={
          currentPage === 1 ? "pagination-prev disable" : "pagination-prev"
        }
      >
        <img src="/_new/img/Arrow-Light.svg" alt="arrow" />
      </button>
      <div className="pagination-item">
        {sortedPhones &&
          Array(Math.ceil(sortedPhones.length / itemsOnPage))
            .fill(null)
            .map((_, i) => (
              <button
                className={
                  currentPage - 1 === i
                    ? "pagination-btn active"
                    : "pagination-btn"
                }
                key={i}
                onClick={() => dispatch(setPagination(i))}
              >
                {i + 1}
              </button>
            ))}
      </div>

      <button className="pagination-next">
        <img src="/_new/img/Arrow-Right.svg" alt="arrow" />
      </button>
    </div>
  );
};

export default Pagination;
