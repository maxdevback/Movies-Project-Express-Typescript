import express from "express";
import { configFromEnv } from "./config";

import routes from "./routes";

const App = express();
App.use(express.json());
App.use(routes);

const start = async () => {
  console.log(configFromEnv);
  const port = configFromEnv.PORT || 3000;
  App.listen(port, () => {
    console.log(`App has been started at ${port} port`);
  });
};

start();
