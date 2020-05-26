import express from "express";
import path from "path";

import template from "./template";
import serverSideRendering from "./server";
import { INTERNAL_SERVER_ERROR } from "./constants";

import initialState from "./initialState";
import ServiceUtil from "../client/commons/utils/ServiceUtil";
import { buildUrl } from "../client/commons/utils/url";
import { FRONT_PAGE_TAG } from "../client/commons/constants";
import apis from "../client/commons/constants/api.services";

const app = express();

// hide powered by express
app.disable("x-powered-by");

// Resolves static resources path
app.use(express.static("dist"));

// start the server
const PORT = process.env.PORT || 30000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`SSR running on port ${PORT}`);
});

// server renders home page
app.get("/", (req, res) => {
  const params = req.query || {};
  const url = buildUrl({
    pathName: apis.search,
    query: {
      tags: FRONT_PAGE_TAG,
      ...params,
    },
  });

  ServiceUtil.fetch(url).then(
    (response) => {
      initialState.postList.data = response;

      const { preloadedState, content } = serverSideRendering(initialState);

      const templateHtml = template(content, preloadedState);

      return res.send(templateHtml);
    },
    (err) => {
      return res.status(INTERNAL_SERVER_ERROR).send(err);
    }
  );
});
