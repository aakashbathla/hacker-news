import { useEffect, useReducer } from "react";

import {
  FETCH_LOAD,
  FETCH_SUCCESS,
  FETCH_FAIL,
  FETCH_TEXT_CHANGE,
  FETCH_TEXT_RESET,
} from "./actions";
import axios from "axios";

const INITIAL_STATE = {
  error: false,
  results: {},
  loading: true,
  query: "",
};

const DEFAULT_HITS = 20;

const fetchDataReducer = (state, { type, payload = null }) => {
  switch (type) {
    case FETCH_LOAD:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case FETCH_SUCCESS:
      const oldHits = state.results[state.query]
        ? state.results[state.query].hits
        : [];
      const updatedHits = [...oldHits, ...payload.hits];

      return {
        ...state,
        loading: false,
        results: {
          ...state.results,
          [state.query]: { hits: updatedHits, page: payload.page },
        },
      };
    case FETCH_TEXT_CHANGE:
      return {
        ...state,
        query: payload,
      };
    case FETCH_TEXT_RESET:
      return {
        ...state,
        query: "",
      };
    default:
      return state;
  }
};

const fetchDataComp = (searchUrl) => {
  const [state, dispatch] = useReducer(fetchDataReducer, INITIAL_STATE);

  const fetchData = (page = 0) => {
    const preExisting =
      state.results[state.query] && state.results[state.query].page + 1;
    try {
      console.log("aakash");
      let results;
      axios
        .get(
          `${searchUrl}${state.query}&tags=story&page=${
            preExisting ? preExisting : page
          }&hitsPerPage=${DEFAULT_HITS}`
        )
        .then((resp) => {
          results = resp;
          console.log(results.data);
          dispatch({
            type: FETCH_SUCCESS,
            payload: {
              hits: results.data.hits,
              page: preExisting ? preExisting : page,
            },
          });
        });
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_FAIL });
    }
  };

  const paginate = () => {
    console.log("pagination");
    const { results, query } = state;
    let updatedPage = results[query].page + 1;

    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { ...state, paginate };
};

export default fetchDataComp;
