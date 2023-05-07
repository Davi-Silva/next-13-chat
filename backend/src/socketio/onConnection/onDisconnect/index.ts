import { Socket } from "socket.io";

const onDisconnect = (socket: Socket) => {
  console.log("disconnected...");
  socket;
};

export default onDisconnect;
