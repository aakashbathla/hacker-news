import { LocalStorageUtil } from "../../utils/localStorage";
import { HIDE_POST_KEY } from "../HidePost/constants";
import { VOTE_POST_KEY } from "../Vote/constants";

export const removePost = (postListState, objectID) => {
  const { data, ...others } = postListState;
  const { hits } = data;

  const postIndex = hits.findIndex((post) => {
    return post.objectID === objectID;
  });

  hits.splice(postIndex, 1);

  return {
    data: {
      ...data,
      hits: [...hits],
    },
    ...others,
  };
};

export const filterPostDataWithHiddenPosts = (postListData) => {
  const storage = new LocalStorageUtil();

  const hiddenPostIds = JSON.parse(storage.getItem(HIDE_POST_KEY) || "[]");

  if (hiddenPostIds.length) {
    const { hits } = postListData;
    const filteredHits = hits.filter((hit) => {
      return hiddenPostIds.indexOf(hit.objectID) === -1;
    });

    return {
      ...postListData,
      hits: filteredHits,
    };
  }
  return postListData;
};

export const updateUpVoteInPostData = (postListData) => {
  const storage = new LocalStorageUtil();

  const votedPostIds = JSON.parse(storage.getItem(VOTE_POST_KEY) || "[]");

  if (votedPostIds.length) {
    const { hits } = postListData;
    const votedHits = hits.map((hit) => {
      const cloneHit = { ...hit };

      if (votedPostIds.indexOf(cloneHit.objectID) > -1) {
        cloneHit.voted = true;
      }

      return cloneHit;
    });

    return {
      ...postListData,
      hits: votedHits,
    };
  }
  return postListData;
};
