import { Socket } from "socket.io";

import { io } from "../..";
import registerChatHandlers from "../../handlers/chat";

const onDisconnect = () => {
  console.log("disconnected...");
};

export default onDisconnect;
