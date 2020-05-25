import React from "react";
import { Time } from "../../Utils/Time";
const PostItem = ({
  author,
  created_at_i,
  num_comments,
  objectID,
  points,
  title,
  story_title,
  url,
}) => {
  const urlName = url ? new URL(url).origin : "";
  const created_at = created_at_i
    ? Time(new Date(Date.now() - created_at_i))
    : "";
  return (
    <div className="d-flex align-items-center mh50 post__item--container">
      <div className="post__item--no_of_comments ml25">{num_comments}</div>
      <div className="post__item--no_of_upvotes ml25">{points}</div>
      <div className="post__item--upvote ml10"></div>
      <div className="d-flex post__item--width--desktop post__item--direction--mobile">
        <div className="post__item--title ml10">{title}</div>
        <div className="post__item--author ml10">
          ({urlName}) by <b>{author}</b> {created_at} [
          <a className="post__item--link">
            <b>hide</b>
          </a>
          ]
        </div>
      </div>
    </div>
  );
};

export default PostItem;
