const express = require("express");
const morgan = require("morgan");
const path = require("path");
const router = require("../routes");

const config = app => {
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(
    express.urlencoded({
      extended: false,
    })
  );
  app.use("/api", router);

  app.use(express.static(path.resolve(__dirname, "../", "public")));
  app.get("/", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../", "public", "index.html"))
  );

  app.get("*", (req, res) =>
    res.status(400).json({
      message: "Bad request.",
    })
  );

  return app;
};

module.exports = config;
