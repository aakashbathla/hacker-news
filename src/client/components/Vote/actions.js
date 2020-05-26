import { VOTE_POST } from "./constants";

export const votePost = (data) => ({
  type: VOTE_POST,
  data,
});
