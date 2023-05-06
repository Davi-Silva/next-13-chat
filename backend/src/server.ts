import { Server } from "socket.io";
import http from "http";

import socketio from "./socketio";
import app from "./app";

import { APP_NAME, PORT } from "./constants/envs";

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

socketio();

server.listen(PORT, () => {
  console.log(`${APP_NAME} is listening on port: ${PORT}`);
});
