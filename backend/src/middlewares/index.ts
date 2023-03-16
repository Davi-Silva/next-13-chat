import cors from "cors";
import { Application, json, urlencoded } from "express";
import morgan from "morgan";

import corsOptions from "../config/middlewares/cors";
import { NODE_ENV } from "../constants/envs";

export default (app: Application): void => {
  app.use(cors(corsOptions));

  app.use(json());

  app.use(
    urlencoded({
      extended: false,
    })
  );

  if (NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
};
