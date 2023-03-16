import { Application } from "express";

import status from "./status";

export default (app: Application): void => {
  app.use("/status", status);
};
