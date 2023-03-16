import { Server } from "socket.io";

import server from "../app";
import onConnection from "./onConnection";

export const io = new Server(server);

const socketio = () => {
  io.on("connection", onConnection);
};

export default socketio;
