import React, { useEffect } from "react";
import PostItem from "../PostItem/index";
import Loading from "../../Loading";
import LoadMore from "../../LoadMore/index";
import fetchDataComp from "./reducer";
import {
  filterPostDataWithHiddenPosts,
  updateUpVoteInPostData,
} from "../../Utils/utils";

const searchUrl = "https://hn.algolia.com/api/v1/search?query=";

const Post = ({ postListData, fetchPostListData }) => {
  let filteredData;
  let votedData;
  if (postListData && postListData.hits && postListData.hits.length > 0) {
    filteredData = filterPostDataWithHiddenPosts(postListData);
    votedData = updateUpVoteInPostData(filteredData);
  }
  const postList = votedData ? votedData.hits : undefined;
  useEffect(() => {
    fetchPostListData();
  }, []);
  return (
    <div className="post">
      <div className="post__item">
        {!postList ? (
          <Loading />
        ) : (
          <div>
            {postList &&
              postList.map((hit) => <PostItem key={hit.objectID} {...hit} />)}
            {postList && <LoadMore />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
