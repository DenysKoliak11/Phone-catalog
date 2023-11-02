import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { PhonesType } from "../../types/PhoneType";
import {
  setPagination,
  setPaginationNext,
  setPaginationPrev,
} from "../../redux/slice/filterSlice";

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
  const numberOfPages = sortedPhones
    ? Math.ceil(sortedPhones?.length / itemsOnPage)
    : 0;
  return (
    <div className="pagination">
      <button
        className={
          currentPage === 1 ? "pagination-prev disable" : "pagination-prev"
        }
        onClick={() => dispatch(setPaginationPrev())}
      >
        <img src="/_new/img/Arrow-Light.svg" alt="arrow" />
      </button>
      <div className="pagination-item">
        {sortedPhones &&
          Array(numberOfPages)
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

      <button
        className={
          numberOfPages > currentPage
            ? "pagination-prev"
            : "pagination-prev disable"
        }
        onClick={() => dispatch(setPaginationNext(numberOfPages))}
      >
        <img src="/_new/img/Arrow-Right.svg" alt="arrow" />
      </button>
    </div>
  );
};

export default Pagination;
