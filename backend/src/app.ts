import "dotenv/config";

import express from "express";
import http from "http";

import middleware from "./middlewares";
import routes from "./routes";
import socketio from "./socketio";

const app = express();
const server = http.createServer(app);

middleware(app);

routes(app);

socketio();

export default server;
