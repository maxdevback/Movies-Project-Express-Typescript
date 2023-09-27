import cookie from "cookie-parser";
import { App } from "./App";
import express from "express";
import routes from "./routes";
import path from "path";
import { configFromEnv } from "./config";
import morgan from "morgan";

export const AppInit = () => {
  App.set("views", path.join(__dirname, "views"));
  App.set("view engine", "ejs");
  App.use(cookie());
  App.use(express.static(path.join(__dirname, "public")));
  App.use(express.json());
  App.use(express.urlencoded({ extended: false }));
  if (configFromEnv.STAGE === "dev") {
    App.use(morgan("dev"));
  } else {
    App.use(morgan("common"));
  }
  App.use(routes);
};
