import React from "react";

const PostItem = () => {
  return (
    <div className="d-flex align-items-center mh50 post__item--container">
      <div className="post__item--no_of_comments ml25">36</div>
      <div className="post__item--no_of_upvotes ml25">96</div>
      <div className="post__item--upvote ml10"></div>
      <div className="post__item--title ml10">
        Seemingly Impossible Swift Programs
      </div>
      <div className="post__item--author ml10">
        (nytimes.com) by <b>pd</b> 3 hours ago [
        <a className="btn btn-link">
          <b>hide</b>
        </a>
        ]
      </div>
    </div>
  );
};

export default PostItem;
