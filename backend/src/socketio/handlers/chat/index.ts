import { Server, Socket } from "socket.io";

const chat = (io: Server, socket: Socket) => {
  const chatMessage = (payload: any) => {
    console.log(payload);
  };

  socket.on("sendMessage", chatMessage);
};

export default chat;
