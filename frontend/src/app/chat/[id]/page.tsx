import React from "react";
import type { NextPage } from "next";

import styles from "./index.module.scss";

import { ChatProps } from "./types";
import Chat from "@/components/Chat";

const ChatPage: NextPage<ChatProps> = ({ params }) => {
  return (
    <main className={styles.main}>
      <Chat room={{ id: params.id }} />
    </main>
  );
};

export default ChatPage;
