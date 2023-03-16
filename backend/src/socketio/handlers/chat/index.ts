import { Server, Socket } from "socket.io";

const chat = (io: Server, socket: Socket) => {
  const chatMessage = (payload: any) => {
    io.emit("chat:send:message", payload);
  };

  socket.on("chat:send:message", chatMessage);
};

export default chat;
