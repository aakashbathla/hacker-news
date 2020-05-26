import React, { useEffect } from "react";
import PostItem from "../PostItem/index";
import Loading from "../../Loading";
import LoadMore from "../../LoadMore/index";
import fetchDataComp from "./reducer";

const searchUrl = "https://hn.algolia.com/api/v1/search?query=";

const Post = ({ postListData, fetchPostListData }) => {
  useEffect(() => {
    fetchPostListData();
  }, []);
  return (
    <div className="post">
      <div className="post__item">
        {!postListData ? (
          <Loading />
        ) : (
          <div>
            {postListData &&
              postListData.hits.map((hit) => (
                <PostItem key={hit.objectID} {...hit} />
              ))}
            {postListData && postListData.hits && <LoadMore />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
