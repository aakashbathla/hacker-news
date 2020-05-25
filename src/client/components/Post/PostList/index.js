import React from "react";
import PostItem from "../PostItem/index";
import Loading from "../../Loading";
import fetchDataApi from "./reducer";

const searchUrl = "https://hn.algolia.com/api/v1/search?query=";

const Post = () => {
  const { query, results, loading, error, paginate } = fetchDataApi(searchUrl);
  fetchDataApi(searchUrl);
  results[""] &&
    results[""].hits.map((hit) => {
      console.log(hit);
    });
  return (
    <div className="post">
      <div className="post__item">
        {results[""] &&
          results[""].hits.map((hit) => (
            <PostItem key={hit.objectID} {...hit} />
          ))}
      </div>
    </div>
  );
};

export default Post;
