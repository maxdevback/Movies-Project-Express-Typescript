import express from "express";
import { configFromEnv } from "./config";
import { connect } from "mongoose";

import { passportInit } from "./passport";
import { AppInit } from "./AppConfig";

export const App = express();
passportInit();
AppInit();

const start = async () => {
  await connect(configFromEnv.MONGODB_LINK);
  const port = configFromEnv.PORT || 3000;
  App.listen(port, () => {
    console.log(`App has been started at ${port} port`);
  });
};

start();
