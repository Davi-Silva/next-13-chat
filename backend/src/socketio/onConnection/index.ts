import { Socket } from "socket.io";

import { io } from "../";
import registerChatHandlers from "../handlers/chat";

const onConnection = (socket: Socket) => {
  socket.broadcast.emit("hi");

  registerChatHandlers(io, socket);
};

export default onConnection;
