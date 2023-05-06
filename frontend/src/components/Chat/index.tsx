"use client";

import { FC, useEffect, useState } from "react";

import BodyMessage from "../BodyMessage";
import Header from "../Header";

import { socket } from "@/services/socketio";
import { getLocalStorage } from "@/utils/localStorage";
import ChatInput from "../ChatInput";
import styles from "./index.module.scss";
import { ChatProps, Message, User } from "./types";

const Chat: FC<ChatProps> = ({ room }) => {
  const [user, setUser] = useState<User>();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const data = getLocalStorage("user");
    setUser(data);
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connecting...");
    });

    socket.on("botSendMessage", (payload: any) => {
      console.log(payload);
    });

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = (message: string) => {
    const newMessage = {
      username: user!.username,
      name: user!.name,
      message,
    };
    setMessages((prev) => [...prev, newMessage]);
    socket.emit("sendMessage", newMessage);
  };

  console.log(messages);

  return (
    <div className={styles.container}>
      <Header room={room} />
      <BodyMessage user={user} messages={messages} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
