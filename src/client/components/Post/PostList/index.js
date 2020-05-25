import React from "react";
import PostItem from "../PostItem/index";
import Loading from "../../Loading";
import fetchDataApi from "./reducer";

const searchUrl = "https://hn.algolia.com/api/v1/search?query=";

const Post = () => {
  const { query, results, loading, error, paginate } = fetchDataApi(searchUrl);
  fetchDataApi(searchUrl);
  console.log(results);
  return (
    <div className="post">
      <div className="post__item">
        <PostItem />
        <div>My name is aakash</div>
      </div>
    </div>
  );
};

export default Post;
