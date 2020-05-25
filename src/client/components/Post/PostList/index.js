import React from "react";
import PostItem from "../PostItem/index";
import Loading from "../../Loading";
import fetchDataComp from "./reducer";

const searchUrl = "https://hn.algolia.com/api/v1/search?query=";

const Post = () => {
  const { results, loading, error, paginate } = fetchDataComp(searchUrl);
  return (
    <div className="post">
      <div className="post__item">
        {!results[""] || loading ? (
          <Loading />
        ) : (
          <div>
            {results[""] &&
              results[""].hits.map((hit) => (
                <PostItem key={hit.objectID} {...hit} />
              ))}
            {results[""] && results[""].hits && (
              <a href="" onClick={paginate} className="post__button">
                More
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
