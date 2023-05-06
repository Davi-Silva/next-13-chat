"use client";

import React, { FC, useEffect, useState } from "react";

import Header from "../Header";
import BodyMessage from "../BodyMessage";

import styles from "./index.module.scss";
import { ChatProps, User } from "./types";
import ChatInput from "../ChatInput";
import { getLocalStorage } from "@/utils/localStorage";
import { socket } from "@/services/socketio";

const Chat: FC<ChatProps> = ({ room }) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const data = getLocalStorage("user");
    setUser(data);
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connecting...");
    });

    return () => {
      socket.off();
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header room={room} />
      <BodyMessage user={user} />
      <ChatInput />
    </div>
  );
};

export default Chat;
