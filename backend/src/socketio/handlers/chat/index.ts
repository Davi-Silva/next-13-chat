import { Server, Socket } from "socket.io";

const chat = (io: Server, socket: Socket) => {
  const sendMessage = (payload: any) => {
    console.log({ payload });
    socket.broadcast.emit("message", payload);
  };

  socket.on("message", sendMessage);
};

export default chat;
