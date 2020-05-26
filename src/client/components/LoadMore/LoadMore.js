import React from "react";
import PropTypes from "prop-types";

const isVisible = (currentPage, totalPages) => {
  return !!(totalPages && currentPage !== totalPages);
};

const LoadMore = ({ currentPage, fetchPostListData, totalPages }) => {
  const cp = currentPage + 1;
  return (
    isVisible(cp, totalPages) && (
      <div className="load-more sm-text-center md-text-initial">
        <a
          onClick={(e) => {
            e.preventDefault();
            fetchPostListData({ page: cp });
          }}
          className="post__button"
        >
          More
        </a>
      </div>
    )
  );
};

LoadMore.propTypes = {
  currentPage: PropTypes.number.isRequired,
  fetchPostListData: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default LoadMore;
