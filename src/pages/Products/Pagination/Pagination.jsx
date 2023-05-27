import React from "react";
import "./Pagination.scss";
import Next from "../../../assets/next.svg";
import Previous from "../../../assets/previous.svg";

const Pagination = () => {
  return (
    <div className="pagination">
      <button>
        <img src={Previous} alt="previous" />
      </button>
      <div className="pages-num active">
        <span className="active">1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <button>
        <img src={Next} alt="next" />
      </button>
    </div>
  );
};

export default Pagination;
