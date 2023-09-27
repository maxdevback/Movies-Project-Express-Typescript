import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { IConfigFromEnv } from "./types";

const envAmount = 6;

export const configFromEnv = dotenv.parse(
  fs.readFileSync(path.join(__dirname, "..", ".env"))
) as unknown as IConfigFromEnv;

if (Object.keys(configFromEnv).length !== envAmount)
  throw new Error("Something is wrong with the environment");
