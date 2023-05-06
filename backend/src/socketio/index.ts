import { Server } from "socket.io";

import server from "../app";
import onConnection from "./onConnection";
import { FRONTEND } from "../constants/envs";

export const io = new Server(server, {
  cors: {
    origin: FRONTEND,
    methods: ["GET", "POST"],
  },
});

const socketio = () => {
  io.on("connection", onConnection);
};

export default socketio;
