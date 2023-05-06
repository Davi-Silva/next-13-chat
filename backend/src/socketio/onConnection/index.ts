import { Socket } from "socket.io";

import socketio, { io } from "../";
import registerChatHandlers from "../handlers/chat";
import onDisconnect from "./onDisconnect";

const onConnection = (socket: Socket) => {
  socket.broadcast.emit("hi");

  registerChatHandlers(io, socket);

  socket.on("disconnect", onDisconnect);
};

export default onConnection;
