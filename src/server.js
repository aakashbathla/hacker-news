import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./client/App";
import template from "./client/app/template";

const port = 30000;
const server = express();

server.use(express.static("dist"));
server.get("/", (req, res) => {
  const component = renderToString(<App />);
  res.send(
    template({
      body: component,
      title: "FROM THE SERVER",
    })
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
