import React from "react";
import "./Pagination.scss";
import Next from "../../../assets/next.svg";
import Previous from "../../../assets/previous.svg";
const Pagination = ({ data, currentPage, searchParams, setSearchParams }) => {
  const totalPages = new Array(data?.total_pages).fill(0)

  const pageClickHandler = (page) => {
    const params = Object.fromEntries([...searchParams])
    setSearchParams({ ...params, page: page })
  };
  return (
    <div className="pagination">
      <button>
        <img src={Previous} alt="previous" />
      </button>
      <div className="pages-num active">
        {totalPages.map((_, i) => (
          <span
            key={i}
            className={i + 1 == currentPage ? "active" : ""}
            onClick={() => pageClickHandler(i + 1)}
          >
            {i + 1}
          </span>
        ))}
      </div>
      <button>
        <img src={Next} alt="next" />
      </button>
    </div>
  );
};

export default Pagination;
