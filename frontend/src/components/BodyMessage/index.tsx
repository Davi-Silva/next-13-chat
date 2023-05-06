"use client";

import React, { FC } from "react";

import styles from "./index.module.scss";
import { BodyMessageProps } from "./types";

const BodyMessage: FC<BodyMessageProps> = ({ user, messages }) => {
  return (
    <>
      {user && (
        <div className={styles.container}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.username === user?.username ? styles.userMessage : null
              }`}
            >
              <div className={styles.message}>
                <span>{message.name}</span>
                <p>{message.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default BodyMessage;
