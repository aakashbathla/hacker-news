import { LocalStorageUtil } from "../../utils/localStorage";
import { HIDE_POST_KEY } from "../HidePost/constants";
// import { VOTE_FEED_KEY } from "../../atoms/Vote/constants";

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

// export const filterFeedDataWithHiddenFeeds = (postListData) => {
//   const storage = new LocalStorageUtil();

//   const hiddenFeedIds = JSON.parse(storage.getItem(HIDE_FEED_KEY) || "[]");

//   if (hiddenFeedIds.length) {
//     const { hits } = postListData;
//     const filteredHits = hits.filter((hit) => {
//       return hiddenFeedIds.indexOf(hit.objectID) === -1;
//     });

//     return {
//       ...postListData,
//       hits: filteredHits,
//     };
//   }
//   return postListData;
// };

// export const updateUpVoteInFeedData = (postListData) => {
//   const storage = new LocalStorageUtil();

//   const votedFeedIds = JSON.parse(storage.getItem(VOTE_FEED_KEY) || "[]");

//   if (votedFeedIds.length) {
//     const { hits } = postListData;
//     const votedHits = hits.map((hit) => {
//       const cloneHit = { ...hit };

//       if (votedFeedIds.indexOf(cloneHit.objectID) > -1) {
//         cloneHit.voted = true;
//       }

//       return cloneHit;
//     });

//     return {
//       ...postListData,
//       hits: votedHits,
//     };
//   }
//   return postListData;
// };
