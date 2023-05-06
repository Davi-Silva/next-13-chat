import "dotenv/config";

import express from "express";

import middleware from "./middlewares";
import routes from "./routes";
import socketio from "./socketio";

const app = express();

middleware(app);

routes(app);

export default app;
