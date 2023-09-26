import express from "express";
import { configFromEnv } from "./config";
import morgan from "morgan";
import cookie from "cookie-parser";
import path from "path";

import routes from "./routes";

const App = express();
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

const start = async () => {
  console.log(configFromEnv);
  const port = configFromEnv.PORT || 3000;
  App.listen(port, () => {
    console.log(`App has been started at ${port} port`);
  });
};

start();
