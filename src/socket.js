
import socketIOClient from "socket.io-client";

const SOCKET_SERVER_URL = "https://socket.chat.leader.codes"
export const socketRef = socketIOClient(SOCKET_SERVER_URL, { transports: ['websocket'] });




