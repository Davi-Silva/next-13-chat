import { SOCKET_ENDPOINT } from "@/constants/env";
import io from "socket.io-client";

const URL = SOCKET_ENDPOINT;

export const socket = io(URL);
