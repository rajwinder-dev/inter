import dotenv from "dotenv";
import { log } from "../core/helper/log.js";
dotenv.config();

export const env = {
  databaseURL: process.env.DATABASE_URL,
  AiApiKey: process.env.AI_API_KEY,
  coreURL: process.env.CORE_URL,
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
};

const required = ["databaseURL"];
for (const key of required) {
  if (!env[key as keyof typeof env]) {
    log.error(`Missing environment variable: ${key}`);
  }
}
