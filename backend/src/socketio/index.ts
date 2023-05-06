import onConnection from "./onConnection";

import { io } from "../server";

const socketio = () => {
  io.on("connection", onConnection);
};

export default socketio;

export { io };
