import { Socket } from "socket.io";

import { io } from "../";
import registerChatHandlers from "../handlers/chat";

const onConnection = (socket: Socket) => {
  socket.broadcast.emit("join", { id: socket.id });

  console.log("Socket id:", socket.id);

  registerChatHandlers(io, socket);

  socket.on("disconnect", () => {
    socket.broadcast.emit("disconnected", { id: socket.id });
  });
};

export default onConnection;
