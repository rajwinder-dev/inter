import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Express } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import morgan from "morgan";
import path from "path";
import { devMode } from "./config/appConfig.js";
import { env } from "./config/env.js";

import { appError } from "./core/utils/appError.js";
import { globalHandler } from "./core/utils/globalHandler.js";

import { DevMiddleware } from "./core/middleware/devMiddleware.js";

export const app: Express = express();

// dev logs
if (devMode) app.use(morgan("dev"));
// security
app.set("trust proxy", 1);
app.use(helmet());
app.use(hpp());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 500,
  standardHeaders: true,
  message: "Too many requests from this IP , please try again in an hour!",
});
if (!devMode) app.use(limiter);

app.use(
  cors({
    origin: env.coreURL,
    credentials: true,
  }),
);
app.set("view engine", "ejs");

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());
// custom middleware
if (devMode) app.use(DevMiddleware.logRequests);

//  Routes:w
//
app.get("/", (_req, res) => {
  res.status(200).json({ status: "success" });
});
const __dirname = import.meta.dirname;
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/api/v1/calculate", (req, res, next) => {
  res.json("xyz");
});

app.all(/(.*)/, (req, _res, next) => {
  return next(new appError(`Can't find ${req.originalUrl} on this server!`, 404, "INVALID_ROUTE"));
});

app.use(globalHandler);
export default app;
